export default function FootballLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div
      aria-label={label}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
        background: "#0a0a0a",
      }}
    >
      <div className="fb-stage">
        <div className="fb-bounce">
          <svg
            className="fb-spin"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="fbShade" cx="36%" cy="28%" r="80%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="55%" stopColor="#f2f2ee" />
                <stop offset="85%" stopColor="#d8d8d2" />
                <stop offset="100%" stopColor="#bfbfb8" />
              </radialGradient>
              <clipPath id="fbClip">
                <circle cx="32" cy="32" r="30" />
              </clipPath>
            </defs>

            <circle cx="32" cy="32" r="30" fill="url(#fbShade)" stroke="#161616" strokeWidth="1.6" />

            <g clipPath="url(#fbClip)">
              {/* seams from the central pentagon out to the edge patches */}
              <g stroke="#161616" strokeWidth="1.7" strokeLinecap="round">
                <line x1="32" y1="22" x2="32" y2="6" />
                <line x1="41.5" y1="28.9" x2="56.8" y2="24.2" />
                <line x1="37.9" y1="40.1" x2="47.3" y2="53.1" />
                <line x1="26.1" y1="40.1" x2="16.7" y2="53.1" />
                <line x1="22.5" y1="28.9" x2="7.2" y2="24.2" />
              </g>

              {/* central pentagon */}
              <path
                d="M32,22 L41.5,28.9 L37.9,40.1 L26.1,40.1 L22.5,28.9 Z"
                fill="#161616"
                stroke="#161616"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* edge patches, clipped by the ball outline so they curve with it */}
              <g fill="#161616">
                <circle cx="32" cy="0.5" r="8.4" />
                <circle cx="60.4" cy="23.2" r="8.4" />
                <circle cx="49.6" cy="57" r="8.4" />
                <circle cx="14.4" cy="57" r="8.4" />
                <circle cx="3.6" cy="23.2" r="8.4" />
              </g>

              {/* soft contact shading at the bottom of the ball */}
              <ellipse cx="32" cy="60" rx="26" ry="9" fill="rgba(0,0,0,0.14)" />
            </g>

            {/* specular highlight */}
            <ellipse cx="24" cy="18" rx="10" ry="6" fill="rgba(255,255,255,0.55)" transform="rotate(-28 24 18)" />
          </svg>
        </div>
        <div className="fb-shadow" />
      </div>
      <span style={{ font: '600 15px/1 var(--font-inter-tight), sans-serif', color: "rgba(255,255,255,0.85)" }}>
        Club500
      </span>

      <style>{`
        .fb-stage {
          position: relative;
          width: 64px;
          height: 108px;
        }
        .fb-bounce {
          position: absolute;
          left: 0;
          top: 0;
          width: 64px;
          height: 64px;
          transform-origin: 50% 100%;
          animation: fbBounce 1.05s infinite;
        }
        .fb-spin {
          display: block;
          animation: fbSpin 1.4s linear infinite;
        }
        .fb-shadow {
          position: absolute;
          bottom: 2px;
          left: 8px;
          width: 48px;
          height: 9px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 70%);
          animation: fbShadow 1.05s infinite;
        }
        /* Gravity: slow at the top, fast into the floor, squash on impact */
        @keyframes fbBounce {
          0%   { transform: translateY(0) scale(1, 1); animation-timing-function: cubic-bezier(0.5, 0, 0.9, 0.4); }
          46%  { transform: translateY(38px) scale(1, 1); animation-timing-function: linear; }
          50%  { transform: translateY(42px) scale(1.12, 0.82); animation-timing-function: linear; }
          54%  { transform: translateY(38px) scale(1, 1); animation-timing-function: cubic-bezier(0.1, 0.6, 0.5, 1); }
          100% { transform: translateY(0) scale(1, 1); }
        }
        @keyframes fbSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fbShadow {
          0%   { transform: scale(0.55); opacity: 0.35; animation-timing-function: cubic-bezier(0.5, 0, 0.9, 0.4); }
          50%  { transform: scale(1.15); opacity: 0.85; animation-timing-function: cubic-bezier(0.1, 0.6, 0.5, 1); }
          100% { transform: scale(0.55); opacity: 0.35; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fb-bounce, .fb-spin, .fb-shadow { animation: none; }
        }
      `}</style>
    </div>
  );
}
