import useBurger from "../hooks/useBurger";
import { sizes } from "../styles/theme";

export default function Burger({ navOpen, onClick }) {
  useBurger(navOpen);

  return (
    <>
      <button
        className="btn burger"
        aria-label="Navigation Menu"
        onClick={onClick}
      >
        <svg
          version="1.1"
          viewBox="0 0 80 50"
          xmlns="http://www.w3.org/2000/svg"
          height="32"
        >
          <path className="top bar" d="M 10 10 H 70" />
          <path className="middle bar first" d="M 10 25 H 70" />
          <path className="middle bar second" d="M 10 25 H 70" />
          <path className="bottom bar" d="M 10 40 H 70" />
        </svg>
      </button>
      <style jsx>{`
        .burger {
          z-index: 1;
          border: none;
          padding: 0;
          height: ${sizes.headerContentHeightSm};

          &:hover {
            // Override default button hover state
            color: currentColor;
          }

          @media (min-width: ${sizes.mobileBreakpoint}) {
            height: ${sizes.headerContentHeightLg};
          }

          svg {
            height: 100%;
          }

          path {
            stroke: currentColor;
            stroke-width: 4px;
            transform-origin: center;
          }

          .second {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
}
