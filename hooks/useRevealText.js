import { useEffect, useRef, useState } from "react";
import gsap, { SplitText } from "../gsap";

export function useRevealText(type = "chars") {
  const ref = useRef();
  const [tween, setTween] = useState();

  useEffect(() => {
    const linesClass = "overflow-hidden";
    let styleTag;

    document.fonts.ready.then(() => {
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

      gsap.set(split[type], { yPercent: 110 });
      gsap.set(ref.current, { autoAlpha: 1 });

      setTween(
        gsap.to(split[type], {
          yPercent: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "power1.out",
          onComplete: () => split.revert(),
        })
      );
    });

    return () => {
      if (styleTag) styleTag.remove();
    };
  }, []);

  return [ref, tween];
}
