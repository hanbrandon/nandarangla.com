"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const
      }
    }
  };

  return (
    <section className={styles.hero} id="home">
      {/* Background Image Container */}
      <div className={styles.bgWrapper}>
        <Image
          src="/restaurant-interior-bar.jpg"
          alt="Elegant modern Korean restaurant interior layout with warm lighting and wooden furniture"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.contentCard}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badges */}
          <motion.div className={styles.badgeRow} variants={itemVariants}>
            <span className={`${styles.badge} ${styles.badgeSince}`}>Since 1988</span>
            <span className={`${styles.badge} ${styles.badgeHappy}`}>Happy Hour: 12PM-7PM</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 className={styles.title} variants={itemVariants}>
            Welcome to <br />
            Nandarang Restaurant & Bar
          </motion.h1>

          {/* Content Description */}
          <motion.div className={styles.subtitle} variants={itemVariants}>
            <div className={styles.paragraphs}>
              <p>
                We are dedicated to serving you the finest and most authentic traditional Korean cuisine, 
                as well as exciting Korean fusion dishes that push culinary boundaries.
              </p>
              <p>
                To complement your dining experience, we offer an extensive selection of beverages. 
                Quench your thirst with a variety of beers, including bottles, cans, and a rotating selection on tap. 
                Our bar also boasts an impressive array of spirits, soju, wines, and handcrafted cocktails 
                that perfectly complement the flavors of our cuisine.
              </p>
            </div>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div className={styles.btnArea} variants={itemVariants}>
            <a 
              href="https://order.online/store/cafe-nandarang-los-angeles-87238/?hideModal=true&pickup=true" 
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.orderBtn}`}
            >
              Order Online
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
