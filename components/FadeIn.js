import { useEffect, useRef } from "react";
import gsap from "../gsap";

export default function FadeIn({ children, tl }) {
  const ref = useRef();

  useEffect(() => {
    if (tl === undefined) return;
    gsap.set(ref.current, { y: "-1rem" });
    tl.to(ref.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 1);
  }, [tl]);

  return (
    <>
      <div ref={ref} style={{ visibility: "hidden" }}>
        {children}
      </div>
    </>
  );
}
