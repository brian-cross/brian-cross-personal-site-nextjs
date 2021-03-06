import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "../gsap";
import { useTimeline } from "../hooks/useTimeline";

export default function NavLink({ children, href, navOpen, onClick }) {
  const disableHover = useRef(false);
  const linkRef = useRef();
  const sliderRef = useRef();
  const [sliderDims, setSliderDims] = useState();
  const tl = useTimeline();

  useEffect(() => {
    document.fonts.ready.then(() => {
      const { width, height } = linkRef.current.getBoundingClientRect();
      const top = getComputedStyle(linkRef.current).marginTop;
      setSliderDims({ width, height, top });
    });
  }, []);

  useEffect(() => {
    if (!tl) return;

    if (navOpen) {
      tl.set(sliderRef.current, {
        scaleX: 0,
        transformOrigin: "right",
        autoAlpha: 1,
        delay: 0.6,
      })
        .to(sliderRef.current, {
          scaleX: 1,
          duration: 0.3,
          ease: "power3.out",
        })
        .set(linkRef.current, {
          autoAlpha: 1,
          zIndex: -1,
        })
        .set(sliderRef.current, {
          transformOrigin: "left",
        })
        .to(
          sliderRef.current,
          {
            scaleX: 0,
            duration: 0.3,
            ease: "power3.out",
          },
          ">0.15"
        )
        .set(linkRef.current, {
          zIndex: "unset",
        });
    } else {
      tl.to([linkRef.current, sliderRef.current], {
        autoAlpha: 0,
        duration: 0.25,
      });
    }
  }, [navOpen, tl]);

  function handleTouchEnd() {
    disableHover.current = true;
    onClick();
  }

  function handleClick() {
    if (disableHover.current) return;
    onClick();
  }

  function handleMouseOver() {
    if (disableHover.current) return;

    gsap.to(sliderRef.current, {
      scaleX: 1,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(linkRef.current, {
      color: "black",
      duration: 0.3,
    });
  }

  function handleMouseOut() {
    if (disableHover.current) {
      disableHover.current = false;
      return;
    }

    gsap.to(sliderRef.current, {
      scaleX: 0,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(linkRef.current, {
      color: "unset",
      duration: 0.3,
    });
  }

  return (
    <>
      <div className="slider" aria-hidden="true" ref={sliderRef}></div>
      <Link href={href}>
        <a
          className="nav-link"
          ref={linkRef}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          visibility: hidden;
          position: relative;
          display: inline-block;
          margin: 0.75em 0;
          text-decoration: none;

          @media (hover: hover) {
            &:hover {
              color: inherit;
            }
          }
        }

        .slider {
          visibility: hidden;
          position: absolute;
          will-change: transform; // Fix for Safari v15 rendering bug
          height: ${sliderDims && sliderDims.height}px;
          width: ${sliderDims && sliderDims.width}px;
          top: ${sliderDims && sliderDims.top};
          right: 0;
          background-color: currentColor;
        }
      `}</style>
    </>
  );
}
