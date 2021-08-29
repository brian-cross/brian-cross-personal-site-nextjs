import { useEffect } from "react";
import { ScrollTrigger } from "../gsap";

export function useSmoothScroll() {
  useEffect(() => {
    const LocomotiveScroll = require("locomotive-scroll").default;
    const container = document.getElementById("smooth-scroll-container");

    const locoScroll = new LocomotiveScroll({
      el: container,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: container.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.defaults({
      scroller: container,
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    resizeObserver.observe(container);

    return () => locoScroll.destroy();
  }, []);
}
