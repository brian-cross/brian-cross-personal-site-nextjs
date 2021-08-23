import { useEffect, useRef } from "react";
import gsap, { SplitText } from "../gsap";

export function useRevealHeading() {
  const ref = useRef();

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerText = ".overflow-hidden {overflow: hidden};";
    document.head.appendChild(styleTag);

    const split = new SplitText(ref.current, {
      type: "chars, lines",
      linesClass: "overflow-hidden",
    });

    gsap.set(split.chars, { yPercent: 100 });

    gsap
      .to(split.chars, {
        yPercent: 0,
        stagger: {
          amount: 0.4,
        },
        duration: 0.8,
        delay: 0.5,
        ease: "power1.out",
      })
      .then(() => {
        split.revert();
        styleTag.remove();
      });
  }, []);

  return ref;
}
