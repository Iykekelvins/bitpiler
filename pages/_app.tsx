import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Empowering the planet with the latest in computer technology"
        />
        <meta name="keywords" content="Keywords" />
        <title>Bitpiler</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
