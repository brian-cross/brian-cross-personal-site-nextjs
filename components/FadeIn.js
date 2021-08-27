import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "../gsap";

export default function FadeIn({ children, tl }) {
  const ref = useRef();

  useLayoutEffect(() => {
    gsap.set(ref.current, { opacity: 0, y: "-1rem" });
  }, []);

  useEffect(() => {
    if (tl === undefined) return;
    tl.to(ref.current, { opacity: 1, y: 0, duration: 0.8 }, "<80%");
  }, [tl]);

  return (
    <>
      <div ref={ref}>{children}</div>
    </>
  );
}
