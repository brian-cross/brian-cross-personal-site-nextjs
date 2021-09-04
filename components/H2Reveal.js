import { useRevealText, useTimelineAdd } from "../hooks";

export default function H2Reveal({ children, tl }) {
  const [ref, tween] = useRevealText("words");
  useTimelineAdd(tl, tween, 0.25 + 0.375);

  return (
    <>
      <h2 ref={ref} style={{ visibility: "hidden" }}>
        {children}
      </h2>
    </>
  );
}
