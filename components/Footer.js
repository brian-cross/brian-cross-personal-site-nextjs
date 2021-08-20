export default function Footer() {
  return (
    <footer className="container">
      &copy; {new Date().getFullYear()} - Brian Cross
      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          padding: 1em 0;
          font-weight: 300;
          text-transform: uppercase;
        }
      `}</style>
    </footer>
  );
}
