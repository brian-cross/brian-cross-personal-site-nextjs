import config from "../gsap/config";
import { useRevealText, useTimelineAdd } from "../hooks";

export default function Heading({ tag, tl, children }) {
  const [ref, tween] = useRevealText(config[tag].type);
  useTimelineAdd(tl, tween, config[tag].position);

  const Element = tag;

  return (
    <>
      <Element ref={ref} style={{ visibility: "hidden" }}>
        {children}
      </Element>
    </>
  );
}
