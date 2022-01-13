import Head from 'next/head';

import Header from '../components/Header/Index';
import Swiper from '../components/Swiper/Index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Creent Production</title>
        <meta name="description" content="Creent Production" />
        <link rel="icon" href="/logo.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Open+Sans:wght@400;500;600&family=Quicksand:wght@300;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Swiper />
    </div>
  );
}
