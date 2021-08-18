import useSmoothScroll from "../hooks/useSmoothScroll";

export default function Contact() {
  useSmoothScroll();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    e.target.reset();
  }
  return (
    <main className="container">
      <div className="content">
        <h1>Contact Me</h1>
        <h2>Let's discuss your project</h2>
        <div className="text-block">
          <p>
            What would you like to build? Send me a message and I'll get back to
            you as soon as possible.
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
      </div>
    </main>
  );
}
