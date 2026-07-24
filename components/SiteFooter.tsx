"use client";

import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import LanguageSwitch from "./LanguageSwitch";
import { useLang } from "@/lib/i18n";

const COLUMNS: [string, [string, string][]][] = [
  [
    "footer.explore",
    [
      ["nav.clubs", "/clubs"],
      ["nav.fanzone", "/fanzone"],
      ["nav.events", "/events"],
      ["nav.about", "/about"],
    ],
  ],
  [
    "footer.stories",
    [
      ["nav.newsroom", "/newsroom"],
      ["nav.podcast", "/podcast"],
      ["footer.journalists", "/journalist"],
    ],
  ],
  [
    "footer.getinvolved",
    [
      ["footer.register", "/clubs/apply"],
      ["nav.volunteer", "/volunteer"],
      ["nav.partners", "/partners"],
      ["nav.signin", "/login"],
    ],
  ],
];

export default function SiteFooter() {
  const { t } = useLang();
  return (
    <footer
      style={{
        position: "relative",
        background: "#121413",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "clamp(36px, 7vw, 56px) clamp(20px, 4vw, 32px) 30px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* striker dribbles past defenders and buries it in the goal */}
        <div className="goal-strip" aria-hidden="true">
          <div className="gs-ground" />

          <div className="gs-goal">
            <span className="gs-goal-text">Goal!</span>
            <svg width="74" height="60" viewBox="0 0 74 60" fill="none">
              <g className="gs-net" stroke="rgba(255,255,255,0.28)" strokeWidth="1">
                <path d="M8 8 V56 M16 8 V56 M24 8 V56 M32 8 V56 M40 8 V56 M48 8 V56 M56 8 V56 M64 8 V56" />
                <path d="M6 16 H68 M6 24 H68 M6 32 H68 M6 40 H68 M6 48 H68" />
              </g>
              <path d="M5 58 V6 H69 V58" stroke="#e9e9e4" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>


          {/* goalkeeper: set stance, dives, beaten, picks himself up */}
          <div className="gs-gk">
            <div className="gs-gk-move">
              {/* set position frame A: crouched, gloves wide */}
              <svg className="gkpose pose-gk-ra" width="46" height="42" viewBox="0 0 64 56" fill="none">
                <path d="M26 19 L18 25 L13 30" stroke="#cfd3d7" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="13" cy="30" r="3" fill="#e9e9e4" />
                <path d="M25 36 L19 43 L18 50" stroke="#aeb4ba" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 50 L13.5 50.6" stroke="#e9e9e4" strokeWidth="3.8" strokeLinecap="round" />
                <path d="M28 15 C22.5 16 20 22 20.8 31 L33 31 C34 22 31.5 16 28 15 Z" fill="#767f88" />
                <path d="M20.8 31 L33 31 L33.5 37 L20.3 37 Z" fill="#4a5157" />
                <path d="M29 36 L35 43 L36 50" stroke="#cfd3d7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36 50 L40.5 50.6" stroke="#e9e9e4" strokeWidth="3.8" strokeLinecap="round" />
                <path d="M30 19 L38 25 L43 30" stroke="#cfd3d7" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="43" cy="30" r="3" fill="#e9e9e4" />
                <circle cx="28" cy="9" r="5.8" fill="#cfd3d7" />
              </svg>
              {/* set position frame B: bounce, gloves up a touch */}
              <svg className="gkpose pose-gk-rb" width="46" height="42" viewBox="0 0 64 56" fill="none">
                <path d="M26 19 L17 23 L12 27" stroke="#cfd3d7" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="27" r="3" fill="#e9e9e4" />
                <path d="M25 36 L20 44 L19 50" stroke="#aeb4ba" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 50 L14.5 50.6" stroke="#e9e9e4" strokeWidth="3.8" strokeLinecap="round" />
                <path d="M28 15 C22.5 16 20 22 20.8 31 L33 31 C34 22 31.5 16 28 15 Z" fill="#767f88" />
                <path d="M20.8 31 L33 31 L33.5 37 L20.3 37 Z" fill="#4a5157" />
                <path d="M29 36 L34 44 L35 50" stroke="#cfd3d7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35 50 L39.5 50.6" stroke="#e9e9e4" strokeWidth="3.8" strokeLinecap="round" />
                <path d="M30 19 L39 23 L44 27" stroke="#cfd3d7" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="44" cy="27" r="3" fill="#e9e9e4" />
                <circle cx="28" cy="9" r="5.8" fill="#cfd3d7" />
              </svg>
              {/* full stretch dive toward the shot */}
              <svg className="gkpose pose-gk-dv" width="46" height="42" viewBox="0 0 64 56" fill="none">
                <path d="M20 24 L12 16 L6 10" stroke="#cfd3d7" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="10" r="3" fill="#e9e9e4" />
                <path d="M22 27 L14 22 L8 19" stroke="#aeb4ba" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="19" r="3" fill="#e9e9e4" />
                <path d="M20 23 C16 27 18 34 26 36 L33 28 C31 21 24 19 20 23 Z" fill="#767f88" />
                <path d="M26 36 L33 28 L38 33 L31 40 Z" fill="#4a5157" />
                <path d="M33 34 L43 40 L51 45" stroke="#cfd3d7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M51 45 L56 46" stroke="#e9e9e4" strokeWidth="3.8" strokeLinecap="round" />
                <path d="M35 30 L45 33 L53 34" stroke="#aeb4ba" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M53 34 L58 34.4" stroke="#e9e9e4" strokeWidth="3.8" strokeLinecap="round" />
                <circle cx="15" cy="17" r="5.8" fill="#cfd3d7" />
              </svg>
              {/* beaten: flat on the turf, propped on a glove */}
              <svg className="gkpose pose-gk-dn" width="46" height="42" viewBox="0 0 64 56" fill="none">
                <path d="M22 49 L36 49 L47 48" stroke="#cfd3d7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M47 48 L52 47.4" stroke="#e9e9e4" strokeWidth="3.8" strokeLinecap="round" />
                <path d="M23 46 L35 44 L45 45" stroke="#aeb4ba" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 45 L50 44.6" stroke="#e9e9e4" strokeWidth="3.6" strokeLinecap="round" />
                <path d="M10 42 C7 46 10 51 18 50 L25 44 C23 38 13 38 10 42 Z" fill="#767f88" />
                <path d="M14 45 L10 52" stroke="#cfd3d7" strokeWidth="4.4" strokeLinecap="round" />
                <circle cx="10" cy="52" r="3" fill="#e9e9e4" />
                <circle cx="8" cy="38" r="5.4" fill="#cfd3d7" />
              </svg>
            </div>
          </div>

          {/* defenders that get skipped past */}
          <div className="gs-def gs-def-1">
            <div className="gs-def-react-1">
              <div className="gs-def-body">
              {/* defensive shuffle frame A: crouched, arms wide, weight left */}
              <svg className="dpose pose-d1-sa" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M24 19 L15 22 L9 18" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="18" r="2.2" fill="#79828b" />
                <path d="M23 38 L15 44 L13 53" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 53 L8.5 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 16 C20.5 17 18 23 18.8 33 L31 33 C32 23 29.5 17 26 16 Z" fill="#5c666f" />
                <path d="M18.8 33 L31 33 L31.5 40 L18.3 40 Z" fill="#434b53" />
                <path d="M27.5 38 L34 44 L37 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M37 53 L41.5 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 19 L37 22 L43 18" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="43" cy="18" r="2.2" fill="#9aa4ad" />
                <circle cx="26" cy="10" r="6" fill="#9aa4ad" />
              </svg>
              {/* defensive shuffle frame B: weight shifted right */}
              <svg className="dpose pose-d1-sb" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M24 19 L15 23 L9 21" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="21" r="2.2" fill="#79828b" />
                <path d="M23 38 L17 45 L16 53" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 53 L11.5 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 16 C20.5 17 18 23 18.8 33 L31 33 C32 23 29.5 17 26 16 Z" fill="#5c666f" />
                <path d="M18.8 33 L31 33 L31.5 40 L18.3 40 Z" fill="#434b53" />
                <path d="M27.5 38 L36 43 L38 52" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 52 L42.5 52.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 19 L37 21 L43 15" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="43" cy="15" r="2.2" fill="#9aa4ad" />
                <circle cx="26" cy="10" r="6" fill="#9aa4ad" />
              </svg>
              {/* sliding tackle toward the striker (coming from the left) */}
              <svg className="dpose pose-d1-lg" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M28 19 L35 13 L40 8" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40" cy="8" r="2.2" fill="#79828b" />
                <path d="M26 36 L30 44 L26 51" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26 51 L30.5 51.8" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 16 C20.5 17 18 23 18.8 33 L31 33 C32 23 29.5 17 26 16 Z" fill="#5c666f" />
                <path d="M18.8 33 L31 33 L31.5 40 L18.3 40 Z" fill="#434b53" />
                <path d="M22 36 L12 42 L4 46" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 46 L-0.5 46.8" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M24 19 L16 26 L10 30" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="30" r="2.2" fill="#9aa4ad" />
                <circle cx="24" cy="9" r="6" fill="#9aa4ad" />
              </svg>
              {/* beaten: twisted, legs crossed, arms flailing */}
              <svg className="dpose pose-d1-bt" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M25 17 L18 11 L14 6" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="6" r="2.2" fill="#79828b" />
                <path d="M27 36 L20 44 L22 52" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 52 L17.5 52.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 14 C20.5 15 18 21 18.8 31 L31 31 C32 21 29.5 15 26 14 Z" fill="#5c666f" />
                <path d="M18.8 31 L31 31 L31.5 38 L18.3 38 Z" fill="#434b53" />
                <path d="M24 36 L28 45 L24 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 53 L28.6 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L37 15 L42 10" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="42" cy="10" r="2.2" fill="#9aa4ad" />
                <circle cx="29" cy="8" r="6" fill="#9aa4ad" />
              </svg>
            </div>
            </div>
          </div>
          <div className="gs-def gs-def-2">
            <div className="gs-def-react-2">
              <div className="gs-def-body">
              {/* defensive shuffle frame A: crouched, arms wide, weight left */}
              <svg className="dpose pose-d2-sa" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M24 19 L15 22 L9 18" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="18" r="2.2" fill="#79828b" />
                <path d="M23 38 L15 44 L13 53" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 53 L8.5 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 16 C20.5 17 18 23 18.8 33 L31 33 C32 23 29.5 17 26 16 Z" fill="#5c666f" />
                <path d="M18.8 33 L31 33 L31.5 40 L18.3 40 Z" fill="#434b53" />
                <path d="M27.5 38 L34 44 L37 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M37 53 L41.5 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 19 L37 22 L43 18" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="43" cy="18" r="2.2" fill="#9aa4ad" />
                <circle cx="26" cy="10" r="6" fill="#9aa4ad" />
              </svg>
              {/* defensive shuffle frame B: weight shifted right */}
              <svg className="dpose pose-d2-sb" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M24 19 L15 23 L9 21" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="21" r="2.2" fill="#79828b" />
                <path d="M23 38 L17 45 L16 53" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 53 L11.5 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 16 C20.5 17 18 23 18.8 33 L31 33 C32 23 29.5 17 26 16 Z" fill="#5c666f" />
                <path d="M18.8 33 L31 33 L31.5 40 L18.3 40 Z" fill="#434b53" />
                <path d="M27.5 38 L36 43 L38 52" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 52 L42.5 52.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 19 L37 21 L43 15" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="43" cy="15" r="2.2" fill="#9aa4ad" />
                <circle cx="26" cy="10" r="6" fill="#9aa4ad" />
              </svg>
              {/* sliding tackle toward the striker (coming from the left) */}
              <svg className="dpose pose-d2-lg" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M28 19 L35 13 L40 8" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40" cy="8" r="2.2" fill="#79828b" />
                <path d="M26 36 L30 44 L26 51" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26 51 L30.5 51.8" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 16 C20.5 17 18 23 18.8 33 L31 33 C32 23 29.5 17 26 16 Z" fill="#5c666f" />
                <path d="M18.8 33 L31 33 L31.5 40 L18.3 40 Z" fill="#434b53" />
                <path d="M22 36 L12 42 L4 46" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 46 L-0.5 46.8" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M24 19 L16 26 L10 30" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="30" r="2.2" fill="#9aa4ad" />
                <circle cx="24" cy="9" r="6" fill="#9aa4ad" />
              </svg>
              {/* beaten: twisted, legs crossed, arms flailing */}
              <svg className="dpose pose-d2-bt" width="32" height="54" viewBox="0 0 52 64" fill="none">
                <path d="M25 17 L18 11 L14 6" stroke="#79828b" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="6" r="2.2" fill="#79828b" />
                <path d="M27 36 L20 44 L22 52" stroke="#79828b" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 52 L17.5 52.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M26 14 C20.5 15 18 21 18.8 31 L31 31 C32 21 29.5 15 26 14 Z" fill="#5c666f" />
                <path d="M18.8 31 L31 31 L31.5 38 L18.3 38 Z" fill="#434b53" />
                <path d="M24 36 L28 45 L24 53" stroke="#9aa4ad" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 53 L28.6 53.6" stroke="#d9dde1" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L37 15 L42 10" stroke="#9aa4ad" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="42" cy="10" r="2.2" fill="#9aa4ad" />
                <circle cx="29" cy="8" r="6" fill="#9aa4ad" />
              </svg>
            </div>
            </div>
          </div>

          {/* our striker: sprite-frame run cycle, kick pose, celebration pose */}
          <div className="gs-player">
            <div className="gs-player-inner">
              <div className="gs-player-bob">
              {/* run frame A */}
              <svg className="pose pose-run-a" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 17 L19 22 L14.5 17.5" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14.5" cy="17.5" r="2.2" fill="#b9b9b2" />
                <path d="M25 36 L17 44 L11.5 52" stroke="#b9b9b2" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.5 52 L7 52.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="var(--blue)" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M28 36 L37 42 L34.5 53" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M34.5 53 L39.5 53.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L35 22 L40 17" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40" cy="17" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              {/* run frame B */}
              <svg className="pose pose-run-b" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 17 L23 23 L18 26" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="26" r="2.2" fill="#b9b9b2" />
                <path d="M25 36 L21 44 L15 50" stroke="#b9b9b2" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 50 L10.5 50.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="var(--blue)" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M28 36 L33 43 L30 53" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 53 L35 53.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L33 23 L38 26" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="38" cy="26" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              {/* run frame C: legs passing under the body */}
              <svg className="pose pose-run-c" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 17 L21.5 23 L21 28" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="21" cy="28" r="2.2" fill="#b9b9b2" />
                <path d="M25.5 36 L24 45 L21.5 52" stroke="#b9b9b2" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.5 52 L17 52.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="var(--blue)" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M28 36 L30.5 45 L33 52" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 52 L37.5 52.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L33.5 23 L34 28" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="34" cy="28" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              {/* strike pose */}
              <svg className="pose pose-kick" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 17 L18 20 L12 15" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="15" r="2.2" fill="#b9b9b2" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="var(--blue)" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M26 36 L24.5 45 L24 54" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 54 L28.6 54.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 36 L38 38 L47 31" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M47 31 L51 28.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M29 17 L36 20 L42 24" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="42" cy="24" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              {/* celebration pose: arms up */}
              <svg className="pose pose-cele" width="38" height="58" viewBox="0 0 52 64" fill="none">
                <path d="M26 16 L20 8 L15.5 2" stroke="#b9b9b2" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="15.5" cy="2.5" r="2.2" fill="#b9b9b2" />
                <path d="M28 14 C22.5 15 20 21 20.8 31 L33 31 C34 21 31.5 15 28 14 Z" fill="var(--blue)" />
                <path d="M20.8 31 L33 31 L33.5 38 L20.3 38 Z" fill="#e9e9e4" />
                <path d="M25.5 36 L24.5 45 L24 54" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 54 L28.6 54.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M28.5 36 L29.5 45 L30 54" stroke="#e9e9e4" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 54 L34.6 54.6" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
                <path d="M30 16 L36 8 L40.5 2" stroke="#e9e9e4" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="40.5" cy="2.5" r="2.2" fill="#e9e9e4" />
                <circle cx="28" cy="8" r="6" fill="#e9e9e4" />
              </svg>
              </div>
            </div>
          </div>

          <div className="gs-ball-x">
            <div className="gs-ball-hop">
              <div className="gs-ball-y">
                <svg width="16" height="16" viewBox="0 0 64 64" fill="none">
                  <defs>
                    <clipPath id="gsBallClip">
                      <circle cx="32" cy="32" r="30" />
                    </clipPath>
                  </defs>
                  <circle cx="32" cy="32" r="30" fill="#f5f5f0" stroke="#161616" strokeWidth="2" />
                  <g clipPath="url(#gsBallClip)">
                    <g stroke="#161616" strokeWidth="2.4" strokeLinecap="round">
                      <line x1="32" y1="22" x2="32" y2="6" />
                      <line x1="41.5" y1="28.9" x2="56.8" y2="24.2" />
                      <line x1="37.9" y1="40.1" x2="47.3" y2="53.1" />
                      <line x1="26.1" y1="40.1" x2="16.7" y2="53.1" />
                      <line x1="22.5" y1="28.9" x2="7.2" y2="24.2" />
                    </g>
                    <path d="M32,22 L41.5,28.9 L37.9,40.1 L26.1,40.1 L22.5,28.9 Z" fill="#161616" />
                    <g fill="#161616">
                      <circle cx="32" cy="0.5" r="8.4" />
                      <circle cx="60.4" cy="23.2" r="8.4" />
                      <circle cx="49.6" cy="57" r="8.4" />
                      <circle cx="14.4" cy="57" r="8.4" />
                      <circle cx="3.6" cy="23.2" r="8.4" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 400,
              flex: "1 1 300px",
            }}
          >
            <Image
              src="/assets/club500-logo.jpg"
              alt="Club 500"
              width={64}
              height={64}
              style={{ height: 64, width: "auto", alignSelf: "flex-start" }}
            />
            <div style={{ font: '700 17px/1.2 var(--font-inter-tight), sans-serif' }}>
              Grassroots to <span className="gold">Greatness</span>
            </div>
            <p
              style={{
                margin: 0,
                font: '400 14px/1.6 var(--font-inter-tight), sans-serif',
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {t("footer.blurb")}
            </p>
            <div>
              <div style={{ font: '600 15px/1.3 var(--font-inter-tight), sans-serif', marginBottom: 10 }}>
                {t("footer.subscribe")}
              </div>
              <NewsletterForm />
            </div>
          </div>
          <div style={{ display: "flex", gap: "clamp(32px, 5vw, 64px)", flexWrap: "wrap", paddingTop: 8 }}>
            {COLUMNS.map(([head, links]) => (
              <div
                key={head}
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                <span className="mono-label" style={{ color: "rgba(255,255,255,0.55)" }}>{t(head)}</span>
                {links.map(([l, href]) => (
                  <Link
                    key={l}
                    href={href}
                    style={{
                      font: '500 14px/1 var(--font-inter-tight), sans-serif',
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {t(l)}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: 44,
            paddingTop: 22,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              ["Facebook", "https://www.facebook.com/club500.africa", "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.12 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z"],
              ["X", "https://x.com/Club500_Africa", "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"],
              ["Instagram", "https://www.instagram.com/club500.africa", "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.43 1.44 1.44 1.44 0 0 0-1.43-1.44z"],
              ["YouTube", "https://www.youtube.com/@Club500-Africa", "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12z"],
              ["TikTok", "https://www.tiktok.com/@club500.africa", "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"],
              ["WhatsApp", "https://chat.whatsapp.com/Gb1ImjuUSkQBhchqVxBnjG", "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"],
            ].map(([label, href, path]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.75)",
                  transition: "all .2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
          <LanguageSwitch />
          <span className="mono-label" style={{ color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
            {t("footer.rights")} ·{" "}
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.55)" }}>Privacy</Link> ·{" "}
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.55)" }}>Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
