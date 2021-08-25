import { useLayoutEffect, useRef } from "react";
import gsap, { SplitText } from "../gsap";

export function useRevealText(type = "chars") {
  const ref = useRef();

  useLayoutEffect(() => {
    const linesClass = "overflow-hidden";
    let styleTag;

    if (!document.getElementById(linesClass)) {
      styleTag = document.createElement("style");
      styleTag.id = linesClass;
      styleTag.innerText = `.${linesClass} {overflow: hidden};`;
      document.head.appendChild(styleTag);
    }

    const split = new SplitText(ref.current, {
      type: `${type}, lines`,
      linesClass,
    });

    gsap.set(split[type], { yPercent: 100 });

    gsap.to(split[type], {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: "power1.out",
    });

    return () => {
      if (styleTag) styleTag.remove();
    };
  }, []);

  return ref;
}
