import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

      <Head>
        {/* Primary Meta Tags */}
        <title>RS Gear Products – Industrial Gear & Gearbox Manufacturer in India</title>
        <meta name="title" content="RS Gear Products – Industrial Gear & Gearbox Manufacturer in India" />
        <meta name="description" content="RS Gear Products is a top manufacturer of industrial gearboxes, spur gears, bevel gears, and helical gears in India. Serving engineering, automotive, and heavy industries." />
        <meta name="keywords" content="Gearbox, Coir Machinery, Industrial Equipment, Defibering Machine, Conveyor Roller, Baling Press, RS Engineering" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rs-gear-products.vercel.app/" />
        <meta property="og:title" content="RS Gear Products – Industrial Gear & Gearbox Manufacturer in India" />
        <meta property="og:description" content="Leading manufacturer of industrial gears and gearboxes including spur, helical, and bevel gears. Contact RS Gear Products today." />
        <meta property="og:image" content="https://rs-gear-products.vercel.app/images/rs-gear-preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rs-gear-products.vercel.app/" />
        <meta property="twitter:title" content="RS Gear Products – Industrial Gear & Gearbox Manufacturer in India" />
        <meta property="twitter:description" content="Explore RS Gear Products, your trusted partner for industrial gears and gearbox manufacturing in India." />
        <meta property="twitter:image" content="https://rs-gear-products.vercel.app/images/rs-gear-preview.jpg" />
         <meta name="google-site-verification" content="_8lxFnkoU5VwkRJwxlgiIDKOpNLYBsFHnx6DmW26Ih8" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://rs-gear-products.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
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
