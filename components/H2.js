import { useRevealText } from "../hooks";

export default function H2({ children }) {
  const ref = useRevealText("words");

  return (
    <>
      <h2 ref={ref}>{children}</h2>
    </>
  );
}
