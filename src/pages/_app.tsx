import { SessionProvider } from "next-auth/react";
import { globalStyles } from "stitches.config";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  globalStyles();
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
