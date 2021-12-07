import "../style.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link
          href="https://unpkg.com/nes.css@latest/css/nes.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        ></link>
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
