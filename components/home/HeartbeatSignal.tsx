"use client";

/* Compact single-beat EKG squiggle, sized to sit right next to the word "heartbeat". */
const PATH = "M0,15 L18,15 L24,4 L30,26 L36,8 L42,15 L64,15";

export default function HeartbeatSignal() {
  return (
    <svg
      viewBox="0 0 64 30"
      aria-hidden="true"
      style={{ width: 46, height: 22, display: "inline-block", verticalAlign: "middle", marginLeft: 8, overflow: "visible" }}
    >
      <path d={PATH} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <path
        className="heartbeat-signal-trace"
        d={PATH}
        pathLength={1000}
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 5px rgba(245,179,1,0.85))" }}
      />
    </svg>
  );
}
