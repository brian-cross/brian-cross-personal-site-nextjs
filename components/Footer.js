export default function Footer() {
  return (
    <footer className="container">
      &copy; {new Date().getFullYear()} - Brian Cross
      <style jsx>{`
        footer {
          justify-content: center;
        }
      `}</style>
    </footer>
  );
}
