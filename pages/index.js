import Link from "next/link";
import { colors } from "../styles/theme";
import { useSlidingHeader, useSmoothScroll, useTimeline } from "../hooks";
import FadeIn from "../components/FadeIn";
import Heading from "../components/Heading";

export default function Home() {
  useSmoothScroll();
  useSlidingHeader();

  const tl = useTimeline();

  return (
    <main className="container">
      <div className="content">
        <Heading tag="h1" tl={tl}>
          <span className="bold-highlight">Brian</span>{" "}
          <span className="shift-left">Cross</span>
        </Heading>
        <Heading tag="h2" tl={tl}>
          Web Developer
          <br />
          Edmonton Alberta Canada
        </Heading>
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
