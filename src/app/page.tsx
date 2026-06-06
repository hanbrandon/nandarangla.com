"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuOverview from "@/components/MenuOverview";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Nandarang LA known for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nandarang is a legendary Koreatown, Los Angeles institution established in 1988. We are famous for serving authentic traditional Korean dishes, creative Korean fusion specialties, and an extensive bar selection including draft beers, soju, and handcrafted cocktails."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Nandarang located and is there parking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located at 3815 W 6th St, Los Angeles, CA 90020 (heart of Koreatown). Valet parking is available for our guests, and street parking can also be found in the surrounding area."
        }
      },
      {
        "@type": "Question",
        "name": "What are Nandarang's hours of operation and Happy Hour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open daily from 11:00 AM to 2:00 AM, making it the perfect spot for both lunch and late-night dining. Our popular Happy Hour runs every day from 12:00 PM to 7:00 PM, offering fantastic deals on select drinks and popular bar bites."
        }
      },
      {
        "@type": "Question",
        "name": "Do you accept reservations and takeout/delivery orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we welcome both walk-ins and table reservations. For those dining at home, you can easily order pickup or delivery directly through our website or by calling us at +1 (213) 388-8513."
        }
      }
    ]
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

        {/* Guest Stories / Testimonials Section */}
        <section className={`section ${styles.testimonialsSection}`} id="testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <span className="btn-outline" style={{ pointerEvents: 'none', border: 'none', padding: '0', color: 'var(--primary)', letterSpacing: '0.2em' }}>
                Guest Experience
              </span>
              <h2 id="testimonials-title" className="section-title" style={{ marginTop: '8px' }}>Guest Stories</h2>
            </div>

            <div className={styles.testimonialsGrid}>
              
              <article className={styles.testimonialCard}>
                <span className={styles.quoteIcon} aria-hidden="true">&ldquo;</span>
                <p className={styles.quoteText}>
                  An absolute revelation. The flavors are deeply traditional yet presented with such modern elegance. A true dining experience.
                </p>
                <h4 className={styles.author}>Eleanor R.</h4>
                <span className={styles.verifiedBadge}>Verified Guest</span>
              </article>

              <article className={styles.testimonialCard}>
                <span className={styles.quoteIcon} aria-hidden="true">&ldquo;</span>
                <p className={styles.quoteText}>
                  The Dolsot Bibimbap is a masterpiece. The crispiness of the rice and the quality of the ingredients are unparalleled in LA.
                </p>
                <h4 className={styles.author}>James T.</h4>
                <span className={styles.verifiedBadge}>Verified Guest</span>
              </article>

              <article className={styles.testimonialCard}>
                <span className={styles.quoteIcon} aria-hidden="true">&ldquo;</span>
                <p className={styles.quoteText}>
                  Impeccable service and a serene atmosphere. Nandarang offers a quiet luxury that makes you feel completely transported.
                </p>
                <h4 className={styles.author}>Sophia M.</h4>
                <span className={styles.verifiedBadge}>Verified Guest</span>
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
