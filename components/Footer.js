import { colors } from "../styles/theme";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="copyright">
          &copy; {new Date().getFullYear()} - Brian Cross
        </div>
        <div>
          This website is{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/brian-cross/brian-cross-personal-site-nextjs"
          >
            open source
          </a>{" "}
        </div>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5em;
          padding: 1em 0;
          font-weight: 300;
          background-color: ${colors.footerBg};

          a {
            font-size: inherit;
          }
        }
      `}</style>
    </>
  );
}
