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
            Nandarang Korean Restaurant & Bar in Koreatown LA
          </motion.h1>

          {/* Content Description */}
          <motion.div className={styles.subtitle} variants={itemVariants}>
            <div className={styles.paragraphs}>
              <p>
                Since 1988, Nandarang has served Korean comfort food, fusion dishes, and late-night plates
                in the heart of Koreatown Los Angeles.
              </p>
              <p>
                Join us for daily happy hour, soju, cocktails, sake, spirits, draft beer, and Korean bar food
                close to Wilshire, Western, and 6th Street.
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
