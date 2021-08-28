import { useRevealText, useTimelineAdd } from "../hooks";

export default function H1Reveal({ children, tl }) {
  const [ref, tween] = useRevealText();
  useTimelineAdd(tl, tween, 0.25);

  return (
    <>
      <h1 ref={ref} style={{ visibility: "hidden" }}>
        {children}
      </h1>
    </>
  );
}
