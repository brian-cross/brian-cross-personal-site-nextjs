import { useState } from "react";
import FadeIn from "../components/FadeIn";
import H1Reveal from "../components/H1Reveal";
import H2Reveal from "../components/H2Reveal";
import { useSlidingHeader, useSmoothScroll, useTimeline } from "../hooks";
import { colors } from "../styles/theme";

export default function Contact() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    description: "",
  });

  useSmoothScroll();
  useSlidingHeader();

  const tl = useTimeline();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const rawData = Object.fromEntries(formData.entries());

    const { name, email, description } = rawData;

    const validationResult = {
      name: validateName(name),
      email: validateEmail(email),
      description: validateDescription(description),
    };

    setErrors(validationResult);

    if (validationError(validationResult)) return;

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(rawData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        e.target.reset();
      })
      .catch(console.error);
  }

  function validateName(name) {
    if (name.length === 0) return "Name field is required";
    return "";
  }

  function validateEmail(email) {
    if (email.length === 0) return "Email address is required";
    if (!isValidEmail(email)) return "Invalid email address";
    return "";
  }

  function validateDescription(description) {
    if (description.length === 0) return "Project info is required";
    return "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validationError(result) {
    for (const error of Object.values(result)) {
      if (error) return true;
    }

    return false;
  }

  return (
    <>
      <main className="container">
        <div className="content">
          <H1Reveal tl={tl}>Contact Me</H1Reveal>
          <H2Reveal tl={tl}>Let's discuss your project</H2Reveal>
          <FadeIn tl={tl}>
            <div className="text-block">
              <p>
                What would you like to build? Send me a message and I'll get
                back to you as soon as possible.
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="label">
                <label htmlFor="name">Name *</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={() => setErrors(prev => ({ ...prev, name: "" }))}
                />
              </div>
              <div className="label">
                <label htmlFor="email">Email Address *</label>
              </div>
              <div className="input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={() => setErrors(prev => ({ ...prev, email: "" }))}
                />
              </div>
              <div className="label">
                <label htmlFor="phone">Phone Number / Extension</label>
              </div>
              <div className="input">
                <input type="tel" name="phone" id="phone" />
              </div>
              <div className="label">
                <label htmlFor="company">Company Name</label>
              </div>
              <div className="input">
                <input type="text" name="company" id="company" />
              </div>
              <div className="label">
                <label htmlFor="url">Website URL</label>
              </div>
              <div className="input">
                <input type="url" name="url" id="url" />
              </div>
              <div className="label">
                <label htmlFor="description">
                  Tell me about your project *
                </label>
              </div>
              <div className="input">
                <textarea
                  name="description"
                  id="description"
                  cols="50"
                  rows="8"
                  onChange={() =>
                    setErrors(prev => ({ ...prev, description: "" }))
                  }
                ></textarea>
              </div>
              <div className="input">
                <button className="btn large" type="submit">
                  Send Message
                </button>
              </div>
              <p>* required</p>
            </form>
          </FadeIn>
        </div>
      </main>
      <style jsx>{`
        input,
        textarea {
          transition: border-color 0.1s linear;

          &#email {
            border-color: ${errors.email.length === 0
              ? colors.lightTranslucent
              : colors.error};
          }

          &#name {
            border-color: ${errors.name.length === 0
              ? colors.lightTranslucent
              : colors.error};
          }

          &#description {
            border-color: ${errors.description.length === 0
              ? colors.lightTranslucent
              : colors.error};
          }
        }
      `}</style>
    </>
  );
}
