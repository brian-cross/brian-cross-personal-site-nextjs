import { useEffect, useRef } from "react";
import { sizes } from "../styles/theme";
import { useTimeline } from "../hooks/useTimeline";
import NavLink from "./NavLink";

export default function NavMenu({ navOpen, onClick }) {
  const navRef = useRef();
  const sliderRef = useRef();

  const tl = useTimeline();

  useEffect(() => {
    if (!tl) return;

    if (navOpen) {
      tl.set(navRef.current, {
        autoAlpha: 1,
      })
        .set(sliderRef.current, {
          scaleX: 0,
        })
        .to(sliderRef.current, {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
        });
    } else {
      tl.to(sliderRef.current, {
        scaleX: 0,
        duration: 1,
        ease: "power3.out",
      }).set(navRef.current, {
        autoAlpha: 0,
      });
    }
  }, [navOpen, tl]);

  return (
    <>
      <nav className="nav-menu fullscreen" ref={navRef}>
        <div
          className="slider fullscreen"
          aria-hidden="true"
          ref={sliderRef}
        ></div>
        <div className="container">
          <ul>
            <li>
              <NavLink href="/" navOpen={navOpen} onClick={onClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" navOpen={navOpen} onClick={onClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact" navOpen={navOpen} onClick={onClick}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink href="/services" navOpen={navOpen} onClick={onClick}>
                Services
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: ${sizes.fullHeight};
        }

        .nav-menu {
          visibility: hidden;
          display: flex;
          align-items: center;
          text-align: right;
        }

        .slider {
          transform-origin: right;
          background: black;
        }

        .container {
          z-index: 1;
        }

        li {
          position: relative;
        }
      `}</style>
    </>
  );
}
