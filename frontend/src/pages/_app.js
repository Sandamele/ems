import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";
import Layout from "../components/layout/layout";
export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}
