import Link from "next/link";
import { sizes } from "../styles/theme";
import Portal from "./Portal";

export default function NavMenu({ onClick }) {
  return (
    <>
      <Portal selector="#modal-root">
        <div className="nav-menu">
          <div className="container">
            <nav onClick={onClick}>
              <ul>
                <li>
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Portal>
      <style jsx>{`
        .nav-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: ${sizes.fullHeight};
          display: flex;
          align-items: center;
          background: black;
          text-align: right;

          a {
            display: inline-block;
            margin: 0.75em 0;
            text-decoration: none;
          }
        }
      `}</style>
    </>
  );
}
