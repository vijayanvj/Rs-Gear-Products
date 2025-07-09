import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
<Head>
  <title>Gearbox & Coir Mill Machinery Manufacturer | RS Engineering Products</title>
  <meta name="description" content="RS Engineering Products specializes in gearboxes, defibering machines, and coir mill equipment engineered for performance and reliability." />
  <meta name="keywords" content="Gearbox, Coir Machinery, Industrial Equipment, Defibering Machine, Conveyor Roller, Baling Press, RS Engineering" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="RS Engineering Products | Gearboxes & Coir Mill Machinery" />
  <meta property="og:description" content="Leading manufacturer of coir mill equipment and custom gearboxes in India." />
  <meta property="og:image" content="/images/logo.png" />
  <meta property="og:url" content="https://rs-gear-products.vercel.app" />
  <link rel="canonical" href="https://rs-gear-products.vercel.app" />

  {/* ✅ Google Search Console verification meta tag */}
  <meta name="google-site-verification" content="googled494bffc5af251be.html" />
</Head>
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
