import { useRevealHeading } from "../hooks";

export default function H1({ children }) {
  const ref = useRevealHeading();

  return (
    <>
      <h1 ref={ref}>{children}</h1>
      <style jsx>{`
        h1 {
          visibility: hidden;
        }
      `}</style>
    </>
  );
}
