import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTimeline } from "../hooks/useTimeline";

export default function NavLink({ children, href, navOpen }) {
  const linkRef = useRef();
  const sliderRef = useRef();
  const [sliderDims, setSliderDims] = useState();
  const tl = useTimeline();

  useEffect(() => {
    const { width, height } = linkRef.current.getBoundingClientRect();
    const top = getComputedStyle(linkRef.current).marginTop;
    setSliderDims({ width, height, top });
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
        );
    } else {
      tl.to(linkRef.current, { autoAlpha: 0, duration: 0.25 });
    }
  }, [navOpen, tl]);

  return (
    <>
      <div className="slider" ref={sliderRef}></div>
      <Link href={href}>
        <a className="nav-link" ref={linkRef}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          visibility: hidden;
          display: inline-block;
          margin: 0.75em 0;
          text-decoration: none;
        }

        .slider {
          visibility: hidden;
          position: absolute;
          height: ${sliderDims?.height}px;
          width: ${sliderDims?.width}px;
          top: ${sliderDims?.top};
          right: 0;
          background-color: currentColor;
        }
      `}</style>
    </>
  );
}
