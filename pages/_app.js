import "normalize.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useViewportHeight } from "../hooks";
import Script from "next/script";
import Layout from "../components/Layout";
import globalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  useViewportHeight();

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MEJVTC7MGK" />
      <Script
        id="analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEJVTC7MGK');`,
        }}
      />
      <Layout>
        <Component {...pageProps} />
        <style jsx>{globalStyles}</style>
      </Layout>
    </>
  );
}

export default MyApp;
