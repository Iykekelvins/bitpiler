import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="application-name" content="Bitpiler" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bitpiler" />
        <meta
          name="description"
          content="Empowering the planet with the latest in computer technology"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://app.colabb.io" />
        <meta name="twitter:title" content="Bitpiler" />
        <meta
          name="twitter:description"
          content="Empowering the planet with the latest in computer technology"
        />
        {/* <meta name="twitter:image" content="https://staging.app.colabb.io/svg/icon.svg" /> */}
        <meta name="twitter:creator" content="@iykekelvins" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bitpiler" />
        <meta
          property="og:description"
          content="Empowering the planet with the latest in computer technology"
        />
        <meta property="og:site_name" content="Bitpiler" />
        <meta property="og:url" content="https://app.colabb.io" />
        {/* <meta property="og:image" content="https://staging.app.colabb.io/svg/icon.svg" /> */}

        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link href="/favicon.svg" rel="icon" type="image/svg" sizes="16x16" />
        <link rel="apple-touch-icon" href="/icon-16.png"></link>
        <meta name="theme-color" content="#1b1464" />
      </Head>
      <body>
        {/* <div id="modal"></div> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
