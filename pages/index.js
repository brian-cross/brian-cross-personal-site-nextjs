import Link from "next/link";
import H1Reveal from "../components/H1Reveal";
import H2Reveal from "../components/H2Reveal";
import { colors } from "../styles/theme";
import { useSlidingHeader, useSmoothScroll, useTimeline } from "../hooks";
import FadeIn from "../components/FadeIn";

export default function Home() {
  useSmoothScroll();
  useSlidingHeader();

  const tl = useTimeline();

  return (
    <main className="container">
      <div className="content">
        <H1Reveal tl={tl}>
          <span className="bold-highlight">Brian</span>{" "}
          <span className="shift-left">Cross</span>
        </H1Reveal>
        <H2Reveal tl={tl}>
          Web Developer
          <br />
          Edmonton Alberta Canada
        </H2Reveal>
        <FadeIn tl={tl}>
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
        </FadeIn>
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
