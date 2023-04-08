import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Layout from "@/app/layout";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  // const [ready, setReady] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   if (router.isReady) {
  //     setReady(true);
  //   }
  // }, [router.isReady]);

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
