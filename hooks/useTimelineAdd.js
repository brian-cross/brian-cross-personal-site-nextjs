import { useEffect } from "react";

export function useTimelineAdd(tl, tween, position) {
  useEffect(() => {
    if (tl === undefined || tween === undefined) return;

    tl.add(tween, position);
  }, [tl, tween]);
}
