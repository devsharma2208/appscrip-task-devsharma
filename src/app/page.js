import Head from 'next/head';
import styles from "./page.module.css";
import Header from "../../component/Header/Header";
import Discover from "../../component/Discover/Discover";
import FilterHeader from "../../component/Filters/FilterHeader/FilterHeader";
import Products from "../../component/Products/Products";
import Image from 'next/image';
import Footer from '../../component/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        
        <title>My Awesome Website | Home</title>
        
        
        <meta name="description" content="Welcome to My Awesome Website. Discover our latest products and filters." />
        
        
        <meta property="og:title" content="My Awesome Website | Home" />
        <meta property="og:description" content="Welcome to My Awesome Website. Discover our latest products and filters." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://myawesomewebsite.com" />
        
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "My Awesome Website | Home",
              "description": "Welcome to My Awesome Website. Discover our latest products and filters.",
              "url": "https://myawesomewebsite.com",
            }),
          }}
        />
      </Head>
      
      <main className={styles.main}>
        <Header />
        <Discover />
        <FilterHeader />
        <Products />
        <Footer/>
      </main>
    </>
  );
}
