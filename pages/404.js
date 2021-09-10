import Link from "next/link";
import Heading from "../components/Heading";
import FadeIn from "../components/FadeIn";
import { useSmoothScroll, useSlidingHeader, useTimeline } from "../hooks";

export default function PageNotFound() {
  useSmoothScroll();
  useSlidingHeader();

  const tl = useTimeline();

  return (
    <main className="container">
      <div className="content">
        <Heading tag="h1" tl={tl}>
          404
        </Heading>
        <Heading tag="h2" tl={tl}>
          Lost in space...
        </Heading>
        <FadeIn tl={tl}>
          <div className="text-block large">
            <h3>This is not the page you're looking for</h3>
          </div>
          <div className="text-block large">
            <Link href="/">
              <a className="btn large">Take me home please</a>
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
