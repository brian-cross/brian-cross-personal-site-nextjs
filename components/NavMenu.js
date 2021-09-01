import Link from "next/link";
import { useEffect, useRef } from "react";
import { sizes } from "../styles/theme";
import { useTimeline } from "../hooks/useTimeline";

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
          <ul onClick={onClick}>
            <li>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="nav-link">Services</a>
              </Link>
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

        a {
          display: inline-block;
          margin: 0.75em 0;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
