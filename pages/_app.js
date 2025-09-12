import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Default metadata that can be overridden by individual pages */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sujoy Ghosh" />
        <meta name="robots" content="index, follow" />

        {/* Default Open Graph metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sujoy Ghosh - Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Default Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@sujoy" />

        {/* Theme and favicon */}
        <meta name="theme-color" content="#66FCF1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
