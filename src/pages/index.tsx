// import Image from "next/image";
import { Rubik } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import News from "@/components/News";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>News App - Latest Breaking News & Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest breaking news, headlines, and stories from around the world. Get real-time news updates on technology, business, politics, and more."
        />
        <meta
          name="keywords"
          content="news, breaking news, headlines, latest news, world news, technology news, business news"
        />
        <meta name="author" content="Your News App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="News App - Latest Breaking News & Updates"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest breaking news, headlines, and stories from around the world."
        />
        <meta property="og:site_name" content="News App" />
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>

      <div
        className={`${rubik.className} w-full font-[family-name:var(--font-geist-sans)] p-4 md:py-6 md:px-10`}
      >
        <Header />
        <News />
      </div>
    </>
  );
}
