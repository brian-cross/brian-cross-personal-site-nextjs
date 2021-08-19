import Link from "next/link";
import { sizes } from "../styles/theme";

export default function NavMenu({ onClick }) {
  return (
    <>
      <div className="nav-menu">
        <div className="container">
          <nav onClick={onClick}>
            <ul>
              <li>
                <Link href="/">
                  <a className="h1">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="h1">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="h1">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="h1">Services</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .nav-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: ${sizes.fullHeight};
          z-index: 1;
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
