import { useEffect } from "react";
import gsap from "../gsap";

export default function useBurger(navOpen) {
  const defaults = {
    duration: 0.3,
    ease: "power3.out",
  };

  useEffect(() => {
    gsap.set(["path.bar"], { transformOrigin: "center" });
  }, []);

  useEffect(() => {
    if (navOpen) {
      gsap.set(".middle.bar.second", {
        visibility: "visible",
      });
      gsap.to([".top.bar", ".bottom.bar"], {
        scaleX: 0,
        ...defaults,
        duration: 0.15,
      });
      gsap.to(".middle.bar.first", {
        rotate: 45,
        ...defaults,
        ease: "back.out",
      });
      gsap.to(".middle.bar.second", {
        rotate: -45,
        ...defaults,
        ease: "back.out",
      });
    } else {
      gsap.to([".top.bar", ".bottom.bar"], {
        scaleX: 1,
        ...defaults,
      });
      gsap
        .to(".middle.bar", {
          rotate: 0,
          ...defaults,
        })
        .then(() => {
          gsap.set(".middle.bar.second", {
            visibility: "hidden",
          });
        });
    }
  }, [navOpen]);
}
