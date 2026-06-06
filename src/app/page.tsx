"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuOverview from "@/components/MenuOverview";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import FAQ, { faqData } from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

export default function Home() {
  // Schema.org Structured Data (JSON-LD) for Restaurant local business SEO
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Nandarang Restaurant & Bar",
    "image": [
      "https://nandarangla.com/nandarang-koreatown-facade.jpg",
      "https://nandarangla.com/kimchi-fried-rice.jpg",
      "https://nandarangla.com/restaurant-interior-dining.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3815 W 6th St",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90020",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.06323,
      "longitude": -118.30907
    },
    "url": "https://nandarangla.com",
    "menu": "https://nandarangla.com/menu.pdf",
    "telephone": "+12133888513",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "02:00"
      }
    ],
    "servesCuisine": ["Korean", "Korean Fusion", "Korean Bar Food"],
    "hasMenu": {
      "@type": "Menu",
      "name": "Nandarang menu",
      "url": "https://nandarangla.com/menu.pdf",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Korean favorites and fusion plates"
        },
        {
          "@type": "MenuSection",
          "name": "Draft beer, soju, sake, spirits, wine, and cocktails"
        }
      ]
    },
    "hasMap": "https://maps.app.goo.gl/qQYP6GXVeyi1wq429",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/NandarangLA/",
      "https://www.instagram.com/NandarangLA/",
      "https://www.tiktok.com/@nandarangla",
      "https://www.yelp.com/biz/nandarang-restaurant-and-bar-los-angeles"
    ]
  };

  // FAQPage Structured Data for AEO/GEO Optimization
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <Navbar />

      <main id="main-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Food Gallery Section */}
        <section className={`section ${styles.gallerySection}`} id="gallery" aria-labelledby="gallery-title">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <span className="btn-outline" style={{ pointerEvents: 'none', border: 'none', padding: '0', color: 'var(--primary)', letterSpacing: '0.2em' }}>
                Visual Journey
              </span>
              <h2 id="gallery-title" className="section-title" style={{ marginTop: '8px' }}>Food Gallery</h2>
            </div>

            <div className={styles.galleryGrid}>
              
              {/* Large Image Card */}
              <ScrollReveal variant="fadeInLeft" className={styles.galleryColLarge} distance={40}>
                <div className={styles.galleryCard}>
                  <div className={`${styles.imgWrapper} ${styles.imgLarge}`}>
                    <Image
                      src="/restaurant-interior-dining.jpg"
                      alt="Elegant modern Korean restaurant interior layout with warm lighting and wooden furniture"
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className={styles.galleryImage}
                    />
                  </div>
                  <div className={styles.caption}>Serene dining atmosphere.</div>
                </div>
              </ScrollReveal>

              {/* Smaller Asymmetric Images Column */}
              <ScrollReveal variant="fadeInRight" className={styles.galleryColSmall} distance={40} delay={0.2}>
                
                <div className={styles.galleryCard}>
                  <div className={`${styles.imgWrapper} ${styles.imgSmall1}`}>
                    <Image
                      src="/korean-taco.jpg"
                      alt="Gourmet plated fusion Korean Taco showcasing modern presentation of traditional flavors"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className={styles.galleryImage}
                    />
                  </div>
                  <div className={styles.caption}>Artisanal plating.</div>
                </div>

                <div className={styles.galleryCard}>
                  <div className={`${styles.imgWrapper} ${styles.imgSmall2}`}>
                    <Image
                      src="/kimchi-fried-rice.jpg"
                      alt="Signature Dolsot Kimchi Fried Rice with premium fresh seasonal ingredients prepared with care"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className={styles.galleryImage}
                    />
                  </div>
                  <div className={styles.caption}>Fresh, seasonal ingredients.</div>
                </div>

              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Menu Overview Section */}
        <MenuOverview />

        {/* Guest Experience Section */}
        <section className={`section ${styles.testimonialsSection}`} id="testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="btn-outline" style={{ pointerEvents: 'none', border: 'none', padding: '0', color: 'var(--primary)', letterSpacing: '0.2em' }}>
                Guest Experience
              </span>
              <h2 id="testimonials-title" className="section-title" style={{ marginTop: '8px' }}>Popular Visits</h2>
            </div>

            <div className={styles.testimonialsGrid}>
              
              <article className={styles.testimonialCard}>
                <span className={styles.quoteIcon} aria-hidden="true">01</span>
                <p className={styles.quoteText}>
                  Late-night Korean food after concerts, karaoke, and Koreatown plans, with the kitchen and bar open until 2 AM.
                </p>
                <h4 className={styles.author}>Late-Night Dining</h4>
                <span className={styles.verifiedBadge}>Open Daily</span>
              </article>

              <article className={styles.testimonialCard}>
                <span className={styles.quoteIcon} aria-hidden="true">02</span>
                <p className={styles.quoteText}>
                  Daily happy hour from 12 PM to 7 PM with Korean bar plates, beer, soju, cocktails, and shareable dishes.
                </p>
                <h4 className={styles.author}>Happy Hour</h4>
                <span className={styles.verifiedBadge}>12PM-7PM</span>
              </article>

              <article className={styles.testimonialCard}>
                <span className={styles.quoteIcon} aria-hidden="true">03</span>
                <p className={styles.quoteText}>
                  A Koreatown spot for classic Korean dishes, fusion plates, cocktails, and casual group dinners near W 6th Street.
                </p>
                <h4 className={styles.author}>Group Dining</h4>
                <span className={styles.verifiedBadge}>Koreatown LA</span>
              </article>

            </div>
          </div>
        </section>

        {/* FAQ Section (AEO, GEO & SEO enhancement) */}
        <FAQ />

        {/* Location & Contact Section */}
        <LocationContact />

      </main>

      <Footer />
    </>
  );
}
