import "normalize.css";
import Layout from "../components/Layout";
import globalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx>{globalStyles}</style>
    </Layout>
  );
}

export default MyApp;
