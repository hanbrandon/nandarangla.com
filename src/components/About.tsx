"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about" aria-labelledby="about-title">
      <div className="container">
        <div className={styles.grid}>
          
          {/* Vertical Text EST. 1988 */}
          <div className={styles.verticalSidebar} aria-hidden="true">
            <span className={`vertical-text ${styles.estText}`}>
              EST. 1988
            </span>
          </div>

          {/* Asymmetric Image Collage */}
          <ScrollReveal variant="fadeInLeft" className={styles.imageComposer} distance={40}>
            <div className={styles.imgFamily}>
              <Image
                src="/nandarang-koreatown-facade.jpg"
                alt="Vintage landmark exterior of Nandarang Restaurant & Bar in LA Koreatown"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.imgInterior}>
              <Image
                src="/restaurant-interior-wood.jpg"
                alt="Elegant modern Korean restaurant dining room showcasing warm wood and sophisticated hanok architectural lines"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </ScrollReveal>

          {/* About Text Content */}
          <ScrollReveal variant="fadeInRight" className={styles.textBlock} distance={40} delay={0.1}>
            <span className={styles.tagline}>Heritage & Legacy</span>
            <h2 id="about-title" className={styles.title}>
              We are a family-owned institution in the heart of Koreatown
            </h2>
            <div className={styles.description}>
              <p>
                We are a cherished family-owned institution that has been a cornerstone of 
                the Koreatown Los Angeles dining scene since our restaurant&apos;s opening in 1988.
              </p>
              <p>
                For over three decades, we have been committed to providing our customers 
                with an unparalleled dining experience that is rooted in tradition and family values.
              </p>
              <p>
                Our W 6th Street location brings together Korean comfort food, fusion plates,
                happy hour drinks, and late-night hospitality for locals, visitors, and groups
                exploring LA&apos;s K-town.
              </p>
            </div>
            <div className={styles.btnArea}>
              <a href="#contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
