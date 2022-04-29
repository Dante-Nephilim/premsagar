import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prem Sagar - Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
