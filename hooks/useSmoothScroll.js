import { useEffect, useRef } from "react";

export default function useSmoothScroll() {
  const scrollContainer = useRef();
  const scroll = useRef();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scrollContainer.current = document.getElementById(
        "smooth-scroll-container"
      );

      scroll.current = new LocomotiveScroll({
        el: scrollContainer.current,
        smooth: true,
      });
    })();

    return () => scroll.current.destroy();
  }, []);
}
