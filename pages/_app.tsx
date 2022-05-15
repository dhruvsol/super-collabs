import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";
import nProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);
function MyApp({ Component, pageProps }: AppProps) {
  const appId = process.env.NEXT_PUBLIC_APP_ID!;
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL!;
  return (
    <>
      <Provider store={store}>
        <MoralisProvider appId={appId} serverUrl={serverUrl}>
          <Component {...pageProps} />
        </MoralisProvider>
      </Provider>
    </>
  );
}

export default MyApp;
