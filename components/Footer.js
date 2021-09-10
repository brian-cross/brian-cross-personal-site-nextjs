import { colors, sizes } from "../styles/theme";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="copyright">
            &copy; {new Date().getFullYear()} - Brian Cross
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          padding: 1em 0;
          font-weight: 300;
          background-color: ${colors.footerBg};
        }

        .copyright {
          display: flex;
          @media (max-width: ${sizes.mobileBreakpoint}) {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
