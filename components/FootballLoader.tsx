export default function FootballLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        background: "#0a0a0a",
      }}
    >
      <div className="fb-loader-stage">
        <svg
          className="fb-loader-ball"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="fbBallClip">
              <circle cx="28" cy="28" r="26" />
            </clipPath>
          </defs>
          <circle cx="28" cy="28" r="26" fill="#f5f5f0" stroke="#0a0a0a" strokeWidth="1.5" />
          <g clipPath="url(#fbBallClip)">
            {/* central pentagon */}
            <path
              d="M28,19 L36.56,25.22 L33.29,35.28 L22.71,35.28 L19.44,25.22 Z"
              fill="#0a0a0a"
              stroke="#0a0a0a"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {/* spokes to surrounding patches */}
            <g stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round">
              <line x1="28" y1="19" x2="28" y2="4.5" />
              <line x1="36.56" y1="25.22" x2="50.2" y2="17.2" />
              <line x1="33.29" y1="35.28" x2="41.7" y2="46.9" />
              <line x1="22.71" y1="35.28" x2="14.3" y2="46.9" />
              <line x1="19.44" y1="25.22" x2="5.8" y2="17.2" />
            </g>
            {/* outer patches */}
            <g fill="#0a0a0a">
              <circle cx="28" cy="2.6" r="4.2" />
              <circle cx="52.2" cy="18.4" r="4.2" />
              <circle cx="43.2" cy="47.6" r="4.2" />
              <circle cx="12.8" cy="47.6" r="4.2" />
              <circle cx="3.8" cy="18.4" r="4.2" />
            </g>
            {/* seam arcs on the ball */}
            <g stroke="#0a0a0a" strokeWidth="1" opacity="0.35" fill="none">
              <circle cx="28" cy="28" r="26" />
            </g>
          </g>
        </svg>
        <div className="fb-loader-shadow" />
      </div>
      <span className="mono-label" style={{ color: "rgba(255,255,255,0.6)" }}>
        <span className="gold">CLUB500</span> · {label}
      </span>

      <style>{`
        .fb-loader-stage {
          position: relative;
          width: 56px;
          height: 84px;
        }
        .fb-loader-ball {
          position: absolute;
          left: 0;
          top: 0;
          animation: fbBounce 0.9s cubic-bezier(.5,0,.5,1) infinite, fbSpin 0.9s linear infinite;
        }
        .fb-loader-shadow {
          position: absolute;
          bottom: 0;
          left: 4px;
          width: 48px;
          height: 10px;
          border-radius: 50%;
          background: rgba(240,180,41,0.35);
          animation: fbShadow 0.9s cubic-bezier(.5,0,.5,1) infinite;
        }
        @keyframes fbBounce {
          0% { top: 0; }
          50% { top: 30px; }
          100% { top: 0; }
        }
        @keyframes fbSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fbShadow {
          0% { transform: scale(0.6); opacity: 0.2; }
          50% { transform: scale(1); opacity: 0.45; }
          100% { transform: scale(0.6); opacity: 0.2; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fb-loader-ball, .fb-loader-shadow { animation: none; }
        }
      `}</style>
    </div>
  );
}
