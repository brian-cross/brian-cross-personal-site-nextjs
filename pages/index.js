import Link from "next/link";
import H1 from "../components/H1";
import H2 from "../components/H2";
import { colors } from "../styles/theme";
import { useSlidingHeader, useSmoothScroll, useTimeline } from "../hooks";

export default function Home() {
  useSmoothScroll();
  useSlidingHeader();

  const tl = useTimeline();

  return (
    <main className="container">
      <div className="content">
        <H1 tl={tl}>
          <span className="bold-highlight">Brian</span>{" "}
          <span className="shift-left">Cross</span>
        </H1>
        <H2 tl={tl}>
          Web Developer
          <br />
          Edmonton Alberta Canada
        </H2>
        <p className="text-block">
          I build fast, secure, accessible websites for businesses and
          individuals.
        </p>
        <p className="text-block">
          I focus on minimizing website load time, maximizing SEO, and
          optimizing accessibility.
        </p>
        <p className="text-block">
          I use responsive design and fluid layout techniques to ensure my
          designs look great and function properly on all device sizes.
        </p>
        <p className="text-block">Interested? Click below to get started.</p>
        <Link href="/contact">
          <a className="btn large">Get in touch</a>
        </Link>
      </div>
      <style jsx>{`
        .bold-highlight {
          font-weight: 700;
          color: ${colors.highlight};
        }

        .shift-left {
          display: inline-block;
          margin-left: -0.3em;
        }
      `}</style>
    </main>
  );
}
