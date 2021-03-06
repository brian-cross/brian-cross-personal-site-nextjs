import Link from "next/link";
import { useState } from "react";
import { colors, sizes } from "../styles/theme";
import Burger from "./Burger";
import NavMenu from "./NavMenu";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  function handleNav() {
    // Ignore clicks on burger icon if menu is animating open or closed
    if (isTransitioning) return;

    setIsTransitioning(true);

    setNavOpen(prev => {
      // Prevent mobile browser from scrolling when menu is open
      prev
        ? (document.body.style.overflow = null)
        : (document.body.style.overflow = "hidden");

      return !prev;
    });
  }

  function handleTransitionEnd() {
    setIsTransitioning(false);
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <Link href="/">
              <a>
                <div className="logo">
                  <svg
                    version="1.1"
                    viewBox="0 0 356.736 368.107"
                    height="32"
                    aria-label="Home Page Link"
                  >
                    <path
                      id="logo-first-path"
                      d="M139.06 5.018c-31.822 8.089-61.046 24.56-84.898 48.412C23.757 83.835 6.006 123.122 1.027 165.31c-1.503 12.745-1.229 24.927 0 37.548 4.118 42.285 22.73 81.415 53.135 111.88 23.852 23.85 53.017 40.323 84.898 48.411 9.624 2.42 19.483 4.133 29.52 4.96V.058c-10.037.827-19.896 2.539-29.52 4.96zm0 327.37C80.258 314.206 36.274 261.956 30.31 198.844h108.75zm0-163.065H30.31c5.964-63.171 49.948-115.361 108.75-133.545z"
                      strokeWidth=".59"
                    />
                    <path
                      id="logo-second-path"
                      d="M230.57 332.389V35.719c41.21 12.752 75.098 42.212 93.813 80.41h32.353c-9.15-23.202-23.084-44.515-41.268-62.758C291.617 29.52 262.451 13.048 230.57 4.96 220.947 2.54 211.088.827 201.051 0V368.048a189.05 189.05 0 0029.52-4.96c31.821-8.087 61.046-24.56 84.897-48.41 18.184-18.185 32.117-39.498 41.268-62.76h-32.353c-18.715 38.258-52.603 67.718-93.813 80.47z"
                      strokeWidth=".59"
                    />
                  </svg>
                </div>
              </a>
            </Link>
            <Burger navOpen={navOpen} onClick={handleNav} />
            <NavMenu
              navOpen={navOpen}
              onClick={handleNav}
              onTransitionEnd={handleTransitionEnd}
            />
          </div>
        </div>
      </header>
      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          top: 0;
          background-color: ${colors.headerBg};
          backdrop-filter: blur(15px);
          z-index: 1;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          padding: 1em 0;
          text-transform: uppercase;
        }

        .logo {
          display: flex;
          align-items: center;
          height: ${sizes.headerContentHeightSm};

          @media (min-width: ${sizes.mobileBreakpoint}) {
            height: ${sizes.headerContentHeightLg};
          }

          svg {
            height: 100%;
          }
        }

        #logo-first-path {
          fill: ${colors.highlight};
        }

        #logo-second-path {
          fill: ${colors.textLight};
        }
      `}</style>
    </>
  );
}
