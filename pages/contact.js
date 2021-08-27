import FadeIn from "../components/FadeIn";
import H1Reveal from "../components/H1Reveal";
import H2Reveal from "../components/H2Reveal";
import { useSlidingHeader, useSmoothScroll, useTimeline } from "../hooks";

export default function Contact() {
  useSmoothScroll();
  useSlidingHeader();

  const tl = useTimeline();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    e.target.reset();
  }
  return (
    <main className="container">
      <div className="content">
        <H1Reveal tl={tl}>Contact Me</H1Reveal>
        <H2Reveal tl={tl}>Let's discuss your project</H2Reveal>
        <FadeIn tl={tl}>
          <div className="text-block">
            <p>
              What would you like to build? Send me a message and I'll get back
              to you as soon as possible.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="label">
              <label htmlFor="name">Name</label>
            </div>
            <div className="input">
              <input type="text" name="name" id="name" required />
            </div>
            <div className="label">
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input">
              <input type="email" name="email" id="email" required />
            </div>
            <div className="label">
              <label htmlFor="phone">Phone Number (optional)</label>
            </div>
            <div className="input">
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="label">
              <label htmlFor="description">Tell me about your project</label>
            </div>
            <div className="input">
              <textarea
                name="description"
                id="description"
                cols="50"
                rows="4"
              ></textarea>
            </div>
            <div className="input">
              <button className="btn large" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </main>
  );
}
