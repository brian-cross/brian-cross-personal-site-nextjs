import { useRevealText, useTimelineAdd } from "../hooks";

export default function H1({ children, tl }) {
  const [ref, tween] = useRevealText();
  useTimelineAdd(tl, tween, 0.25);

  return (
    <>
      <h1 ref={ref}>{children}</h1>
    </>
  );
}
