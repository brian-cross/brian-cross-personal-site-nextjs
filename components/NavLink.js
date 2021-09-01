import Link from "next/link";

export default function NavLink({ children, href }) {
  return (
    <>
      <Link href={href}>
        <a className="nav-link">{children}</a>
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          margin: 0.75em 0;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
