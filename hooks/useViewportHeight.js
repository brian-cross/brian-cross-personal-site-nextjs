import { useEffect } from "react";

export function useViewportHeight() {
  useEffect(() => {
    // Fix for 100vh bug on mobile browsers
    function setVh() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight / 100}px`
      );
    }

    setVh();

    // Re-compute 1vh on orientation change or window resize
    const mediaQueryList = window.matchMedia("(orientation: portrait)");
    mediaQueryList.addEventListener("change", setVh);
    window.addEventListener("resize", setVh);
  }, []);
}
