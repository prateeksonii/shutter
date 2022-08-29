import { globalStyles } from "stitches.config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
