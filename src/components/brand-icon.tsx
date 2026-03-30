import { FONT_GRAVITAS_ONE } from "@/constant/font";

const BrandIcon = () => (
  <>
    <style>{`
        #brand text {
          @apply transition-all duration-500 ease-in-out;
          font-family: var(--font-gravitas-one), serif;
          stroke: url(#paint0_linear_90_16);
          stroke-width: 0.5px;
          fill: url(#paint0_linear_90_16);
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: animate 8s ease-in-out forwards infinite;
        }

        @keyframes animate {
          0% {
            stroke-dashoffset: 0;
            stroke-dasharray: 500;
          }
          50% {
            stroke-dashoffset: 500;
            stroke-dasharray: 100;
          }
          100% {
            stroke-dashoffset: 0;
            stroke-dasharray: 500;
          }
        }

        #brand stop:nth-child(1) {
          animation: gradient 4s ease infinite alternate;
        }

        #brand stop:nth-child(2) {
          animation: gradient 4s ease infinite;
        }

        @keyframes gradient {
          0% {
            stop-color: #a293ff;
          }
          50% {
            stop-color: #4bfdb990;
          }
          100% {
            stop-color: #a293ff;
          }
        }

        #brand:hover > * {
          animation-play-state: paused;
        }
      `}</style>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="60"
      fill="none"
      viewBox="0 0 100 60"
      id="brand"
    >
      <title>Brand Icon</title>
      <defs>
        <linearGradient
          id="paint0_linear_90_16"
          x1="0"
          x2="100"
          y1="30"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A293FF"></stop>
          <stop offset="1" stopColor="rgba(125, 125, 125, 1)"></stop>
        </linearGradient>

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Geometric Frame / Shield Background */}
      <path
        d="M10 5 L90 5 L95 30 L90 55 L10 55 L5 30 Z"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
        style={{ opacity: 0.2 }}
      />

      {/* Main VA Character Set */}
      <g style={{ filter: "url(#glow)" }}>
        <text
          x="33%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{
            fontWeight: 400,
            fontSize: "42px",
            stroke: "#000000",
            strokeWidth: "1px",
            fontFamily: "var(--font-gravitas-one), serif",
            paintOrder: "stroke fill",
          }}
        >
          V
        </text>
        <text
          x="67%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{
            fontWeight: 400,
            fontSize: "42px",
            stroke: "#000000",
            strokeWidth: "1px",
            fontFamily: "var(--font-gravitas-one), serif",
            paintOrder: "stroke fill",
          }}
        >
          A
        </text>
      </g>
    </svg>
  </>
);

export default BrandIcon;
