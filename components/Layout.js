import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({
  children,
  title = "Brian Cross | Web Developer | Edmonton Alberta Canada",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <meta
          name="description"
          content="I build fast, secure, accessible websites for businesses and individuals with a focus on minimizing website load time, maximizing SEO, and optimizing accessibility."
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
