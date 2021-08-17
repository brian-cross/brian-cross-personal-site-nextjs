import Link from "next/link";
import { colors } from "../styles/theme";

export default function Home() {
  return (
    <main className="container">
      <div className="content">
        <h1>
          <span className="h1 bold-highlight">Brian</span>{" "}
          <span className="h1 shift-left">Cross</span>
        </h1>
        <h2>
          Web Developer
          <br />
          Edmonton Alberta Canada
        </h2>
        <div className="text-block">
          <p>
            I build fast, secure, accessible websites for businesses and
            individuals.
          </p>
          <p>
            I focus on minimizing website load time, maximizing SEO, and
            optimizing accessibility.
          </p>
          <p>
            I use responsive design and fluid layout techniques to ensure my
            designs look great and function properly on all device sizes.
          </p>
          <p>Interested? Click below to get started.</p>
        </div>
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
