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
        <meta property="og:url" content="https://www.briancross.ca/" />
        <meta
          property="og:title"
          content="Brian Cross | Web Developer | Edmonton Alberta Canada"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="I build fast, secure, accessible websites for businesses and individuals with a focus on minimizing website load time, maximizing SEO, and optimizing accessibility."
        />
        <meta
          property="og:image"
          content="https://www.briancross.ca/images/og-img.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Header />
      <div id="smooth-scroll-container">
        {children}
        <Footer />
      </div>
      <div id="modal-root"></div>
    </>
  );
}
