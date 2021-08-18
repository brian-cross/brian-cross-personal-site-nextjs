import "normalize.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import useViewportHeight from "../hooks/useViewportHeight";
import Layout from "../components/Layout";
import globalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  useViewportHeight();

  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx>{globalStyles}</style>
    </Layout>
  );
}

export default MyApp;
