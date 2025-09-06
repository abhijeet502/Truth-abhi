import Head from "next/head";
import "../styles/globals.css"; // if you don’t have styles, you can remove this line

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crafted with ❤️ by Abhii</title>
        <meta
          name="description"
          content="A special surprise, crafted with love by Abhii 💖"
        />

        {/* Open Graph (for WhatsApp, Instagram, FB preview) */}
        <meta property="og:title" content="Crafted with ❤️ by Abhii" />
        <meta
          property="og:description"
          content="A special surprise just for you 💝"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://truth-abhi.vercel.app/preview.png"
        />
        <meta property="og:url" content="https://truth-abhi.vercel.app/" />

        {/* Twitter (also used by WhatsApp sometimes) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crafted with ❤️ by Abhii" />
        <meta
          name="twitter:description"
          content="A special surprise just for you 💝"
        />
        <meta
          name="twitter:image"
          content="https://truth-abhi.vercel.app/preview.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
