import { FaFacebook, FaInstagram, FaTiktok, FaYelp, FaGoogle } from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          
          {/* Brand and Copyright info */}
          <div className={styles.brandArea}>
            <span className={styles.brand}>Nandarang</span>
            <p className={styles.copyright}>
              &copy; {currentYear} Nandarang Restaurant & Bar. All rights reserved.
            </p>
            <p className={styles.developer}>
              Website Developed by <a href="https://gawoori.com" target="_blank" rel="noopener noreferrer">GAWOORI.com</a>
            </p>
            <div className={styles.socialList}>
              <a href="https://share.google/kHSa88IrIaBTDSMz2" target="_blank" rel="noopener noreferrer" aria-label="Nandarang Google Business Profile">
                <FaGoogle />
              </a>
              <a href="https://www.facebook.com/NandarangLA/" target="_blank" rel="noopener noreferrer" aria-label="Nandarang Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/NandarangLA/" target="_blank" rel="noopener noreferrer" aria-label="Nandarang Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@nandarangla" target="_blank" rel="noopener noreferrer" aria-label="Nandarang Tiktok">
                <FaTiktok />
              </a>
              <a href="https://www.yelp.com/biz/nandarang-restaurant-and-bar-los-angeles" target="_blank" rel="noopener noreferrer" aria-label="Nandarang Yelp">
                <FaYelp />
              </a>
            </div>
          </div>

          {/* Accessibility & Privacy Links */}
          <div className={styles.linksArea}>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
