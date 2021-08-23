import Link from "next/link";
import { useSmoothScroll, useSlidingHeader } from "../hooks";

export default function About() {
  useSmoothScroll();
  useSlidingHeader();

  return (
    <main className="container">
      <div className="content">
        <h1>About Me</h1>
        <h2>Hi, I'm Brian</h2>
        <div className="text-block large">
          <h3>What do I offer?</h3>
          <p>
            I offer a complete end to end web development service. Design,
            coding, hosting, maintenance. I'll take care of the dirty work while
            you do what you do best - run your business.
          </p>
        </div>
        <div className="text-block large">
          <h3>What's my background?</h3>
          <p>
            I started out as an electronics technologist back in the late 90s. I
            did everything from circuit board layout to designing and
            programming electronics for bio-warfare detection systems.
          </p>
          <p>
            I taught programming and digital electronics at the college level
            (the one I went to, actually), and I've also been a
            telecommunications technician.
          </p>
          <p>
            I first did web development back around 2003; AKA -{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://pavellaptev.github.io/web-dark-ages/"
            >
              the dark ages
            </a>
            . If you know what a table layout is, you feel my pain. Web
            development has come leaps and bounds since then, and I've soaked it
            all up like a sponge thirsty for knowledge.
          </p>
        </div>
        <div className="text-block large">
          <h3>The modern web</h3>
          <p>
            Nowadays I use modern web frameworks and tools to build high
            performance sites that are accessible to all users, scale to all
            device sizes, and have good{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://en.wikipedia.org/wiki/Search_engine_optimization"
            >
              SEO
            </a>
            .
          </p>
          <p>
            Users expect websites to be fast - like a mobile app. According to{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/"
            >
              research by Google
            </a>
            , over half of users will abandon a site that takes more than three
            seconds to load. The tools and techniques I use ensure my sites load
            very quickly.
          </p>
          <p>
            Sites must be accessible to people with disabilities. Even when
            someone simply prefers using a keyboard for navigation - your site
            must work properly. Not only is it good for business, it's good for
            humanity.
          </p>
          <p>
            All these things add up and contribute to a site's SEO; basically
            its ranking on Google.
          </p>
        </div>
        <div className="text-block large">
          <h3>Interested?</h3>
          <p>
            <Link href="/contact">
              <a>Contact me</a>
            </Link>{" "}
            to discuss your project.
          </p>
        </div>
      </div>
    </main>
  );
}
