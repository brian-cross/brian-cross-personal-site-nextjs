import { useEffect } from "react";

export function useTimelineAdd(tl, tween, position) {
  useEffect(() => {
    if (tl === undefined) return;

    tl.add(tween, position);
  }, [tl]);
}
