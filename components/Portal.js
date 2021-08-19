import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";

export default function Portal({ children, selector }) {
  const modalRoot = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    modalRoot.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, modalRoot.current) : null;
}
