import { useRevealText, useTimelineAdd } from "../hooks";

export default function H2Reveal({ children, tl }) {
  const [ref, tween] = useRevealText("words");
  useTimelineAdd(tl, tween, "<50%");

  return (
    <>
      <h2 ref={ref}>{children}</h2>
    </>
  );
}
