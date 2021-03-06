import { useEffect, useState } from "react";
import gsap from "../gsap";
import Portal from "./Portal";
import SubmitFormSpinner from "./SubmitFormSpinner";

export default function SubmitFormModal({ state, onClose }) {
  const [modalOverlay, setModalOverlay] = useState(null);

  const modalText = {
    loading: {
      title: "Sending message...",
      subtitle: "",
    },

    success: {
      title: "Message sent",
      subtitle:
        "Thanks for contacting me. You should hear back within 1 - 2 business days.",
    },

    failure: {
      title: "Error sending message",
      subtitle: "Please close this window and try again.",
    },

    timeout: {
      title: "Timeout error",
      subtitle:
        "The message timed out. Please close this window and try again.",
    },
  };

  useEffect(() => {
    if (!modalOverlay) return;

    gsap.to(modalOverlay, {
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      duration: 0.3,
      ease: "none",
    });
  }, [modalOverlay]);

  return state !== "initial" ? (
    <>
      <Portal selector="#modal-root">
        <div className="overlay centered" ref={setModalOverlay}>
          <div className="modal-wrapper centered">
            <SubmitFormSpinner state={state} />
            <div className="title">{modalText[state].title}</div>
            <div className="subtitle">{modalText[state].subtitle}</div>
            {state === "success" ||
            state === "failure" ||
            state === "timeout" ? (
              <button aria-label="Close" onClick={onClose}>
                &times;
              </button>
            ) : null}
          </div>
        </div>
      </Portal>
      <style jsx>{`
        .overlay {
          position: fixed;
          z-index: 1;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .centered {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-wrapper {
          position: relative;
          flex-direction: column;
          color: #eee;
          background-color: rgba(#eee, 0.4);
          width: 40rem;
          height: 30rem;
          max-width: 90%;
          border-radius: 1rem;
          .title {
            margin: 1em 0;
            font-size: 2em;
          }
          .subtitle {
            text-align: center;
            height: 1em;
            max-width: 75%;
          }
        }

        button {
          position: absolute;
          top: 0;
          right: 1rem;
          font-size: 4rem;
          padding: 0;
          border: 0;
          cursor: pointer;
          background-color: transparent;
          color: currentColor;
        }
      `}</style>
    </>
  ) : null;
}
