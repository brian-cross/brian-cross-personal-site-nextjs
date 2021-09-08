import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Heading from "../components/Heading";
import SubmitFormModal from "../components/SubmitFormModal";
import { useSlidingHeader, useSmoothScroll, useTimeline } from "../hooks";
import { colors, sizes } from "../styles/theme";

export default function Contact() {
  const [submitState, setSubmitState] = useState("initial");

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

    const focusedEl = document.activeElement;
    focusedEl.blur();

    setSubmitState("loading");

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(rawData),
    })
      .then(res => {
        if (res.ok) return res.json();
        throw Error(res.statusText);
      })
      .then(data => {
        console.log(data);
        e.target.reset();
        setSubmitState("success");
      })
      .catch(error => {
        console.error(error);
        setSubmitState("failure");
      });
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
          <Heading tag="h1" tl={tl}>
            Contact Me
          </Heading>
          <Heading tag="h2" tl={tl}>
            Let's discuss your project
          </Heading>
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
                {errors.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
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
                {errors.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </div>
              <div className="label">
                <label htmlFor="phone">Phone Number</label>
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
                {errors.description ? (
                  <div className="error">{errors.description}</div>
                ) : null}
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
      <SubmitFormModal
        state={submitState}
        onClose={() => setSubmitState("initial")}
      />
      <style jsx>{`
        .input {
          position: relative;
        }

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

        .error {
          position: absolute;
          color: ${colors.error};
          bottom: 2em;

          @media (min-width: ${sizes.mobileBreakpoint}) {
            bottom: 1em;
          }
        }
      `}</style>
    </>
  );
}
