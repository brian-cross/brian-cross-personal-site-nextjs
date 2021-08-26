import { useEffect, useState } from "react";
import gsap from "../gsap";

export function useTimeline() {
  const [tl, setTl] = useState();

  useEffect(() => {
    setTl(gsap.timeline());
  }, []);

  return tl;
}
