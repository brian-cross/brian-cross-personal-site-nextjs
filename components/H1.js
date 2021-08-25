import { useRevealText } from "../hooks";

export default function H1({ children }) {
  const ref = useRevealText();

  return (
    <>
      <h1 ref={ref}>{children}</h1>
    </>
  );
}
