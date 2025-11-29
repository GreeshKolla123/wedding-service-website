import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Wedding Website</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;