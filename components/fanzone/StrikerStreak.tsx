"use client";

/* Striker Streak — a lightweight HD canvas penalty game.
   Aim with the pointer, click/tap to shoot, beat the keeper, build a streak.
   The keeper learns: every goal makes him sharper. Pure canvas, no libraries;
   runs fully offline. */

import { useEffect, useRef, useState } from "react";

const W = 800;
const H = 450;

// goal mouth (front face)
const GOAL = { x1: 185, y1: 118, x2: 615, y2: 302 };
const COLS = 3;
const ROWS = 2;

const BALL_HOME = { x: 385, y: 408 };

type Phase = "aim" | "kick" | "shooting" | "done";

type Game = {
  phase: Phase;
  aim: { x: number; y: number };
  target: { x: number; y: number };
  ball: { x: number; y: number; r: number };
  kickT: number;
  shotT: number;
  keeper: { x: number; dive: number | null; diveT: number; diveDur: number };
  streak: number;
  best: number;
  msg: string;
  msgT: number;
  history: number[];
  offTarget: boolean;
  saved: boolean;
};

function zoneOf(x: number, y: number): number {
  const c = Math.min(COLS - 1, Math.max(0, Math.floor(((x - GOAL.x1) / (GOAL.x2 - GOAL.x1)) * COLS)));
  const r = Math.min(ROWS - 1, Math.max(0, Math.floor(((y - GOAL.y1) / (GOAL.y2 - GOAL.y1)) * ROWS)));
  return r * COLS + c;
}

function zoneCenter(z: number): { x: number; y: number } {
  const c = z % COLS;
  const r = Math.floor(z / COLS);
  return {
    x: GOAL.x1 + ((c + 0.5) / COLS) * (GOAL.x2 - GOAL.x1),
    y: GOAL.y1 + ((r + 0.5) / ROWS) * (GOAL.y2 - GOAL.y1),
  };
}

/* roundRect fallback: older mobile Safari lacks ctx.roundRect */
function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export default function StrikerStreak() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game>({
    phase: "aim",
    aim: { x: W / 2, y: 210 },
    target: { x: 0, y: 0 },
    ball: { ...BALL_HOME, r: 13 },
    kickT: 0,
    shotT: 0,
    keeper: { x: W / 2, dive: null, diveT: 0, diveDur: 0.3 },
    streak: 0,
    best: 0,
    msg: "",
    msgT: 0,
    history: [],
    offTarget: false,
    saved: false,
  });
  const [hud, setHud] = useState({ streak: 0, best: 0 });

  useEffect(() => {
    try {
      const b = Number(localStorage.getItem("c500-striker-best") || 0);
      gameRef.current.best = b;
      setHud((h) => ({ ...h, best: b }));
    } catch {}
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let raf = 0;
    let last = performance.now();
    const g = gameRef.current;

    const toLocal = (clientX: number, clientY: number) => {
      const r = canvas.getBoundingClientRect();
      return { x: ((clientX - r.left) / r.width) * W, y: ((clientY - r.top) / r.height) * H };
    };

    const shoot = (x: number, y: number) => {
      if (g.phase !== "aim") return;
      g.target = { x, y };
      g.offTarget = x < GOAL.x1 - 6 || x > GOAL.x2 + 6 || y < GOAL.y1 - 6 || y > GOAL.y2 + 10;
      g.phase = "kick";
      g.kickT = 0;
      g.shotT = 0;
      g.saved = false;

      // ---- difficulty scales with the streak ----
      const readChance = Math.min(0.75, 0.3 + g.streak * 0.06); // keeper reads habits more
      const saveIfGuessed = Math.min(0.95, 0.78 + g.streak * 0.02); // stronger hands
      const reachBonus = Math.min(0.28, g.streak * 0.02); // starts covering nearby zones
      g.keeper.diveDur = Math.max(0.16, 0.3 - g.streak * 0.012); // dives faster

      if (!g.offTarget) {
        const shotZone = zoneOf(x, y);
        g.history.push(shotZone);
        if (g.history.length > 8) g.history.shift();
        let guess: number;
        if (g.history.length >= 3 && Math.random() < readChance) {
          const counts = new Map<number, number>();
          g.history.forEach((z) => counts.set(z, (counts.get(z) || 0) + 1));
          guess = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
        } else {
          guess = Math.floor(Math.random() * COLS * ROWS);
        }
        g.keeper.dive = guess;
        if (guess === shotZone) {
          g.saved = Math.random() < saveIfGuessed;
        } else {
          // adjacent-zone reach grows with streak
          const sameRow = Math.floor(guess / COLS) === Math.floor(shotZone / COLS);
          const adjacentCol = Math.abs((guess % COLS) - (shotZone % COLS)) === 1;
          g.saved = sameRow && adjacentCol && Math.random() < reachBonus;
        }
      } else {
        g.keeper.dive = Math.floor(Math.random() * COLS * ROWS);
      }
      g.keeper.diveT = -0.1; // reacts a beat after the kick starts
    };

    const onMove = (e: MouseEvent) => {
      g.aim = toLocal(e.clientX, e.clientY);
    };
    const onClick = (e: MouseEvent) => {
      const p = toLocal(e.clientX, e.clientY);
      shoot(p.x, p.y);
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const p = toLocal(e.touches[0].clientX, e.touches[0].clientY);
      g.aim = p;
      shoot(p.x, p.y);
      e.preventDefault();
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouch, { passive: false });

    const drawBall = (x: number, y: number, r: number) => {
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.beginPath();
      ctx.ellipse(x, Math.min(y + r + 6, 434), r * 0.9, r * 0.32, 0, 0, Math.PI * 2);
      ctx.fill();
      const grad = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, r * 0.2, x, y, r);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(1, "#cfd3d8");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#14161a";
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.fillStyle = "#14161a";
      ctx.beginPath();
      ctx.arc(x, y, r * 0.3, 0, Math.PI * 2);
      ctx.fill();
      for (let k = 0; k < 5; k++) {
        const a = -Math.PI / 2 + (k * Math.PI * 2) / 5;
        ctx.beginPath();
        ctx.arc(x + Math.cos(a) * r * 0.78, y + Math.sin(a) * r * 0.78, r * 0.18, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    /* --- the keeper: an actual person --- */
    const drawKeeper = (t: number) => {
      const k = g.keeper;
      let kx = k.x;
      let ky = 246;
      let rot = 0;
      let stretch = 0;
      if (k.dive !== null && k.diveT > 0) {
        const zc = zoneCenter(k.dive);
        const dt = Math.min(1, k.diveT / k.diveDur);
        const ease = 1 - Math.pow(1 - dt, 3);
        kx = k.x + (zc.x - k.x) * ease;
        ky = 246 + (Math.min(zc.y, 258) - 246) * ease;
        rot = ((zc.x - k.x) / (GOAL.x2 - GOAL.x1)) * 1.25 * ease;
        stretch = ease;
      } else {
        kx = k.x + Math.sin(t * 1.8) * 14;
        ky = 246 + Math.sin(t * 3.6) * 2; // bounce on his toes
      }

      const SKIN = "#7a5232";
      const SKIN_DARK = "#63421f";

      ctx.save();
      ctx.translate(kx, ky);
      ctx.rotate(rot);

      // legs: shorts + skin + boots
      ctx.strokeStyle = SKIN;
      ctx.lineWidth = 8;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-8, 30);
      ctx.lineTo(-11, 52);
      ctx.moveTo(8, 30);
      ctx.lineTo(11, 52);
      ctx.stroke();
      // boots
      ctx.fillStyle = "#111318";
      rr(ctx, -17, 50, 12, 7, 3);
      ctx.fill();
      rr(ctx, 5, 50, 12, 7, 3);
      ctx.fill();
      // shorts
      ctx.fillStyle = "#0e1526";
      rr(ctx, -15, 20, 30, 14, 5);
      ctx.fill();

      // torso jersey
      const body = ctx.createLinearGradient(0, -20, 0, 26);
      body.addColorStop(0, "#3A5FD9");
      body.addColorStop(1, "#1D3FA1");
      ctx.fillStyle = body;
      rr(ctx, -17, -16, 34, 40, 9);
      ctx.fill();
      // gold chest band + number
      ctx.fillStyle = "rgba(245,179,1,0.9)";
      ctx.fillRect(-17, -6, 34, 3.5);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "800 13px Inter Tight, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("1", 0, 14);

      // arms: sleeves + skin + gold gloves
      const spread = 0.35 + stretch * 0.75;
      const armY = -8 - 28 * spread;
      const armX = 24 * spread + 12;
      // upper sleeves
      ctx.strokeStyle = "#1D3FA1";
      ctx.lineWidth = 9;
      ctx.beginPath();
      ctx.moveTo(-14, -8);
      ctx.lineTo(-14 - armX * 0.45, -8 + armY * 0.45 + 4);
      ctx.moveTo(14, -8);
      ctx.lineTo(14 + armX * 0.45, -8 + armY * 0.45 + 4);
      ctx.stroke();
      // forearms (skin)
      ctx.strokeStyle = SKIN;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(-14 - armX * 0.45, -8 + armY * 0.45 + 4);
      ctx.lineTo(-14 - armX, -8 + armY);
      ctx.moveTo(14 + armX * 0.45, -8 + armY * 0.45 + 4);
      ctx.lineTo(14 + armX, -8 + armY);
      ctx.stroke();
      // gloves
      ctx.fillStyle = "#F5B301";
      ctx.beginPath();
      ctx.arc(-14 - armX, -8 + armY, 6.5, 0, Math.PI * 2);
      ctx.arc(14 + armX, -8 + armY, 6.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#b8860b";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(-14 - armX, -8 + armY, 6.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(14 + armX, -8 + armY, 6.5, 0, Math.PI * 2);
      ctx.stroke();

      // neck + head
      ctx.fillStyle = SKIN_DARK;
      ctx.fillRect(-4, -24, 8, 8);
      ctx.fillStyle = SKIN;
      ctx.beginPath();
      ctx.arc(0, -33, 12, 0, Math.PI * 2);
      ctx.fill();
      // hair: short afro cap
      ctx.fillStyle = "#15100b";
      ctx.beginPath();
      ctx.arc(0, -36, 12.5, Math.PI * 0.95, Math.PI * 2.05);
      ctx.closePath();
      ctx.fill();
      // ears
      ctx.fillStyle = SKIN;
      ctx.beginPath();
      ctx.arc(-11.5, -33, 2.6, 0, Math.PI * 2);
      ctx.arc(11.5, -33, 2.6, 0, Math.PI * 2);
      ctx.fill();
      // eyes
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.ellipse(-4.5, -34, 2.6, 1.9, 0, 0, Math.PI * 2);
      ctx.ellipse(4.5, -34, 2.6, 1.9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#181410";
      ctx.beginPath();
      ctx.arc(-4.2, -34, 1.15, 0, Math.PI * 2);
      ctx.arc(4.8, -34, 1.15, 0, Math.PI * 2);
      ctx.fill();
      // brows
      ctx.strokeStyle = "#15100b";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(-7, -37.5);
      ctx.lineTo(-2, -37.8);
      ctx.moveTo(2, -37.8);
      ctx.lineTo(7, -37.5);
      ctx.stroke();
      // nose
      ctx.strokeStyle = SKIN_DARK;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(0, -33.5);
      ctx.lineTo(-1, -29.8);
      ctx.stroke();
      ctx.fillStyle = SKIN_DARK;
      ctx.beginPath();
      ctx.arc(-1.6, -29.4, 1, 0, Math.PI * 2);
      ctx.arc(1, -29.4, 1, 0, Math.PI * 2);
      ctx.fill();
      // mouth: focused line, grimace when diving
      ctx.strokeStyle = "#3d2413";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      if (stretch > 0.3) {
        ctx.arc(0, -25, 2.6, Math.PI * 0.15, Math.PI * 0.85);
      } else {
        ctx.moveTo(-3, -25.5);
        ctx.lineTo(3, -25.5);
      }
      ctx.stroke();

      ctx.restore();
    };

    /* --- the striker: stands over the ball, swings through it --- */
    const drawStriker = (t: number) => {
      const bx = BALL_HOME.x;
      // kick swing: -1 (backswing idle) -> +1 (followthrough)
      let swing = -0.35 + Math.sin(t * 2.2) * 0.04; // idle sway
      if (g.phase === "kick") {
        const p = Math.min(1, g.kickT / 0.14);
        swing = -0.9 + p * 1.9;
      } else if (g.phase === "shooting" || (g.phase === "done" && g.msgT < 0.5)) {
        swing = 1.0;
      }

      const SKIN = "#8a5a33";
      const sx = bx + 38;
      const sy = 384;

      ctx.save();
      ctx.translate(sx, sy);
      // lean into the kick
      ctx.rotate(-0.08 - Math.max(0, swing) * 0.12);

      // standing leg
      ctx.strokeStyle = SKIN;
      ctx.lineWidth = 8;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(2, 26);
      ctx.lineTo(6, 52);
      ctx.stroke();
      ctx.fillStyle = "#111318";
      rr(ctx, 0, 50, 13, 7, 3);
      ctx.fill();

      // kicking leg: rotates around the hip
      const hip = { x: -4, y: 26 };
      const ang = Math.PI * 0.62 + swing * 0.85; // sweeps toward the ball
      const knee = { x: hip.x + Math.cos(ang) * 16, y: hip.y + Math.sin(ang) * 16 };
      const foot = { x: knee.x + Math.cos(ang - 0.35) * 17, y: knee.y + Math.sin(ang - 0.35) * 17 };
      ctx.strokeStyle = SKIN;
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(hip.x, hip.y);
      ctx.lineTo(knee.x, knee.y);
      ctx.lineTo(foot.x, foot.y);
      ctx.stroke();
      ctx.fillStyle = "#111318";
      ctx.save();
      ctx.translate(foot.x, foot.y);
      ctx.rotate(ang - Math.PI / 2);
      rr(ctx, -6, -3, 14, 7, 3);
      ctx.fill();
      ctx.restore();

      // shorts
      ctx.fillStyle = "#0e1526";
      rr(ctx, -14, 16, 26, 13, 5);
      ctx.fill();

      // torso: gold kit
      const body = ctx.createLinearGradient(0, -18, 0, 22);
      body.addColorStop(0, "#FFCB2E");
      body.addColorStop(1, "#F5B301");
      ctx.fillStyle = body;
      rr(ctx, -15, -16, 28, 36, 8);
      ctx.fill();
      ctx.fillStyle = "#1D3FA1";
      ctx.font = "800 12px Inter Tight, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("9", -1, 6);

      // arms: counter-swing
      ctx.strokeStyle = SKIN;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(-12, -8);
      ctx.lineTo(-24, 4 - Math.max(0, swing) * 16);
      ctx.moveTo(10, -8);
      ctx.lineTo(24, -2 + Math.max(0, swing) * 12);
      ctx.stroke();

      // head
      ctx.fillStyle = SKIN;
      ctx.beginPath();
      ctx.arc(-1, -27, 11, 0, Math.PI * 2);
      ctx.fill();
      // hair: low fade with a top patch
      ctx.fillStyle = "#100c08";
      ctx.beginPath();
      ctx.arc(-1, -30, 11.4, Math.PI * 0.98, Math.PI * 2.02);
      ctx.closePath();
      ctx.fill();
      // eye (profile-ish, looking at goal)
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.ellipse(-6, -28, 2.2, 1.7, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#181410";
      ctx.beginPath();
      ctx.arc(-6.8, -28, 1, 0, Math.PI * 2);
      ctx.fill();
      // brow, nose, mouth
      ctx.strokeStyle = "#100c08";
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(-9, -31.5);
      ctx.lineTo(-4, -31.8);
      ctx.stroke();
      ctx.strokeStyle = "#6b4322";
      ctx.beginPath();
      ctx.moveTo(-8.5, -27);
      ctx.lineTo(-10, -24);
      ctx.stroke();
      ctx.strokeStyle = "#3d2413";
      ctx.beginPath();
      ctx.moveTo(-9.5, -21.5);
      ctx.lineTo(-5.5, -21);
      ctx.stroke();

      ctx.restore();
    };

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now / 1000;

      // --- update ---
      if (g.phase === "kick") {
        g.kickT += dt;
        if (g.kickT >= 0.14) {
          g.phase = "shooting";
          g.shotT = 0;
        }
      } else if (g.phase === "shooting") {
        g.shotT += dt;
        g.keeper.diveT += dt;
        const p = Math.min(1, g.shotT / 0.46);
        const ease = 1 - Math.pow(1 - p, 2.2);
        g.ball.x = BALL_HOME.x + (g.target.x - BALL_HOME.x) * ease;
        g.ball.y = BALL_HOME.y + (g.target.y - BALL_HOME.y) * ease - Math.sin(Math.PI * p) * 26;
        g.ball.r = 13 - 5 * ease;
        if (p >= 1) {
          g.phase = "done";
          if (g.offTarget) {
            g.msg = "OFF TARGET";
            g.streak = 0;
          } else if (g.saved) {
            g.msg = "SAVED!";
            g.streak = 0;
          } else {
            g.msg = "GOAL!";
            g.streak += 1;
            if (g.streak > g.best) {
              g.best = g.streak;
              try {
                localStorage.setItem("c500-striker-best", String(g.best));
              } catch {}
            }
          }
          setHud({ streak: g.streak, best: g.best });
          g.msgT = 0;
        }
      } else if (g.phase === "done") {
        g.msgT += dt;
        g.keeper.diveT += dt;
        if (g.msgT > 1.0) {
          g.phase = "aim";
          g.ball = { ...BALL_HOME, r: 13 };
          g.keeper = { x: W / 2, dive: null, diveT: 0, diveDur: g.keeper.diveDur };
          g.msg = "";
        }
      }

      // --- draw ---
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, "#080b16");
      sky.addColorStop(0.55, "#101a3a");
      sky.addColorStop(1, "#132248");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      for (const fx of [60, W - 60]) {
        const glow = ctx.createRadialGradient(fx, 20, 0, fx, 20, 240);
        glow.addColorStop(0, "rgba(245,235,200,0.16)");
        glow.addColorStop(1, "rgba(245,235,200,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);
      }

      const pitchY = 305;
      for (let s = 0; s < 6; s++) {
        ctx.fillStyle = s % 2 ? "rgba(29,63,161,0.32)" : "rgba(29,63,161,0.22)";
        ctx.fillRect(0, pitchY + s * 25, W, 25);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(90, H);
      ctx.lineTo(150, pitchY + 8);
      ctx.lineTo(W - 150, pitchY + 8);
      ctx.lineTo(W - 90, H);
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.beginPath();
      ctx.ellipse(BALL_HOME.x, 412, 5, 2.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // goal net
      const back = { x1: 215, y1: 136, x2: 585, y2: 288 };
      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.lineWidth = 1;
      for (let i2 = 0; i2 <= 12; i2++) {
        const bx = back.x1 + ((back.x2 - back.x1) / 12) * i2;
        ctx.beginPath();
        ctx.moveTo(bx, back.y1);
        ctx.lineTo(bx, back.y2);
        ctx.stroke();
      }
      for (let i2 = 0; i2 <= 6; i2++) {
        const by = back.y1 + ((back.y2 - back.y1) / 6) * i2;
        ctx.beginPath();
        ctx.moveTo(back.x1, by);
        ctx.lineTo(back.x2, by);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(GOAL.x1, GOAL.y1);
      ctx.lineTo(back.x1, back.y1);
      ctx.moveTo(GOAL.x2, GOAL.y1);
      ctx.lineTo(back.x2, back.y1);
      ctx.moveTo(GOAL.x1, GOAL.y2);
      ctx.lineTo(back.x1, back.y2);
      ctx.moveTo(GOAL.x2, GOAL.y2);
      ctx.lineTo(back.x2, back.y2);
      ctx.stroke();
      // posts
      ctx.strokeStyle = "#f2f3f5";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(GOAL.x1, GOAL.y2 + 4);
      ctx.lineTo(GOAL.x1, GOAL.y1);
      ctx.lineTo(GOAL.x2, GOAL.y1);
      ctx.lineTo(GOAL.x2, GOAL.y2 + 4);
      ctx.stroke();

      drawKeeper(t);
      drawStriker(t);
      drawBall(g.ball.x, g.ball.y, g.ball.r);

      if (g.phase === "aim") {
        const a = g.aim;
        ctx.strokeStyle = "rgba(245,179,1,0.95)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 14, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,179,1,0.95)";
        ctx.fill();
      }

      // difficulty hint
      if (g.streak >= 3 && g.phase === "aim") {
        ctx.font = "600 12px Inter Tight, sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(245,179,1,0.75)";
        ctx.fillText("The keeper is reading you…", W / 2, 100);
      }

      if (g.msg) {
        const pop = Math.min(1, g.msgT / 0.18);
        ctx.save();
        ctx.translate(W / 2, 76);
        ctx.scale(0.7 + 0.3 * pop, 0.7 + 0.3 * pop);
        ctx.font = "800 44px Inter Tight, sans-serif";
        ctx.textAlign = "center";
        ctx.lineWidth = 8;
        ctx.strokeStyle = "rgba(8,10,18,0.85)";
        ctx.strokeText(g.msg, 0, 0);
        ctx.fillStyle = g.msg === "GOAL!" ? "#F5B301" : "#f2f3f5";
        ctx.fillText(g.msg, 0, 0);
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
        <span style={{ font: '800 22px/1 var(--font-inter-tight), sans-serif' }}>
          Streak <span className="gold">{hud.streak}</span>
        </span>
        <span className="mono-label">Best this device: {hud.best}</span>
      </div>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "auto", aspectRatio: "16/9", display: "block", borderRadius: 16, touchAction: "manipulation" }}
        aria-label="Striker Streak penalty game. Aim and click or tap to shoot."
      />
      <p className="mono-label" style={{ marginTop: 10, textAlign: "center" }}>
        Aim with your pointer · click or tap to shoot · every goal makes the keeper sharper
      </p>
    </div>
  );
}
