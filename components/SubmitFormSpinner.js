import { useEffect, useRef } from "react";
import gsap from "../gsap";

export default function SubmitFormSpinner({ state }) {
  const rotateTween = useRef();
  const mainTimeline = useRef();

  useEffect(() => {
    // Initialize the SVG paths
    gsap.set(["#circle", "#checkmark", "#x-1", "#x-2"], {
      drawSVG: 0,
      visibility: "visible",
      transformOrigin: "center",
    });
  }, []);

  // Update the animation based on the state prop
  useEffect(() => {
    const spinDuration = 1.5;
    const drawDuration = 1;

    if (state === "loading") {
      rotateTween.current = gsap.to("#circle", {
        rotation: 360,
        duration: spinDuration,
        repeat: -1,
        ease: "none",
      });

      mainTimeline.current = gsap
        .timeline({
          repeat: -1,
          defaults: { duration: drawDuration, ease: "none" },
        })
        .to("#circle", {
          drawSVG: true,
        })
        .to("#circle", {
          drawSVG: "100% 100%",
        });

      return;
    }

    if (state === "success" || state === "failure") {
      mainTimeline.current.pause();

      if (state === "success") {
        gsap.set("#circle", { stroke: "greenyellow" });
        gsap.to("#checkmark", { drawSVG: true });
      } else {
        gsap.set("#circle", { stroke: "orangered" });
        gsap.set("#x-2", { drawSVG: "100% 100%" });
        gsap.to(["#x-1", "#x-2"], { drawSVG: true });
      }

      gsap
        .to("#circle", { drawSVG: true })
        .then(() => rotateTween.current.pause());
    }
  }, [state]);

  return (
    <>
      <svg viewBox="0 0 24 24">
        <path
          id="circle"
          fill="none"
          d="M 21.49999,11.999997 A 9.4999898,9.4999876 0 0 1 12,21.499984 9.4999898,9.4999876 0 0 1 2.50001,11.999997 9.4999898,9.4999876 0 0 1 12,2.50001 a 9.4999898,9.4999876 0 0 1 9.49999,9.499987 z"
        />
        <path
          id="checkmark"
          fill="none"
          d="m 7.7088497,11.82008 2.8615813,2.861579 5.720718,-5.720716"
        />
        <g>
          <path id="x-1" d="M 8.3100901,15.689906 15.68991,8.3100885" />
          <path id="x-2" d="M 15.689909,15.689907 8.3100913,8.3100873" />
        </g>
      </svg>
      <style jsx>{`
        svg {
          height: 9rem;
        }

        path {
          visibility: hidden;
          stroke: currentColor;
        }

        #checkmark {
          stroke: greenyellow;
        }

        #x-1,
        #x-2 {
          stroke: orangered;
        }
      `}</style>
    </>
  );
}
