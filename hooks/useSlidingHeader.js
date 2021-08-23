import { useEffect } from "react";
import gsap, { ScrollTrigger } from "../gsap";

export function useSlidingHeader() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#smooth-scroll-container",
      start: "top top",
      onUpdate: self => {
        if (self.direction === 1) {
          gsap.to("header", { yPercent: -100, ease: "power1" });
        } else {
          gsap.to("header", { yPercent: 0, ease: "power1" });
        }
      },
    });
  }, []);
}
