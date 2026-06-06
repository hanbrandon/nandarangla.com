import { FaFacebook, FaInstagram, FaTiktok, FaYelp, FaGoogle } from "react-icons/fa6";
import styles from "./LocationContact.module.css";

export default function LocationContact() {
  return (
    <section className={`section ${styles.contactSection}`} id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.grid}>

          {/* Map Section */}
          <div className={styles.mapContainer} aria-label="Nandarang location details">
            <div className={styles.mapCard}>
              <span className={styles.mapEyebrow}>Koreatown Los Angeles</span>
              <p className={styles.mapAddress}>
                3815 W 6th St<br />
                Los Angeles, CA 90020
              </p>
              <a
                href="https://maps.app.goo.gl/qQYP6GXVeyi1wq429"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open Google Maps
              </a>
            </div>
          </div>

          {/* Info Details Section */}
          <div className={styles.infoArea}>
            <span className={styles.tagline}>Find Your Way</span>
            <h2 id="contact-title" className={styles.title}>Visit Us</h2>

            <div className={styles.infoGrid}>
              
              {/* Location */}
              <div className={styles.infoBlock}>
                <h3 className={styles.blockTitle}>Location</h3>
                <address className={styles.blockText} style={{ fontStyle: 'normal' }}>
                  3815 W 6th St<br />
                  Los Angeles, CA 90020
                </address>
                <div style={{ marginTop: '12px' }}>
                  <a 
                    href="https://maps.app.goo.gl/qQYP6GXVeyi1wq429" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '8px 16px', fontSize: '11px', letterSpacing: '0.1em' }}
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className={styles.infoBlock}>
                <h3 className={styles.blockTitle}>Contact</h3>
                <div className={styles.blockText}>
                  <p>E: <a href="mailto:nandarang@gmail.com">nandarang@gmail.com</a></p>
                  <p>T: <a href="tel:2133888513">(213) 388-8513</a></p>
                </div>
              </div>

              {/* Hours */}
              <div className={styles.infoBlock}>
                <h3 className={styles.blockTitle}>Hours</h3>
                <div className={styles.blockText}>
                  <p>Open Everyday: 11AM - 2AM</p>
                  <p>Happy Hour: 12PM - 7PM</p>
                </div>
              </div>

              {/* Social */}
              <div className={styles.infoBlock}>
                <h3 className={styles.blockTitle}>Follow Us</h3>
                <div className={styles.socialLinks}>
                  <a 
                    href="https://share.google/kHSa88IrIaBTDSMz2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.socialBtn}
                    aria-label="Google Business Profile"
                  >
                    <FaGoogle />
                  </a>
                  <a 
                    href="https://www.facebook.com/NandarangLA/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.socialBtn}
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="https://www.instagram.com/NandarangLA/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.socialBtn}
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@nandarangla" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.socialBtn}
                    aria-label="Tiktok"
                  >
                    <FaTiktok />
                  </a>
                  <a 
                    href="https://www.yelp.com/biz/nandarang-restaurant-and-bar-los-angeles" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.socialBtn}
                    aria-label="Yelp"
                  >
                    <FaYelp />
                  </a>
                </div>
              </div>

              {/* Valet Parking Info */}
              <div className={styles.valetBlock}>
                <h3 className={styles.valetTitle}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    aria-hidden="true"
                    className={styles.valetIcon}
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                  Valet Parking Available
                </h3>
                <div className={styles.valetRates}>
                  <span className={styles.rate}>Daytime: <strong>$3</strong></span>
                  <span className={styles.rate}>Nighttime: <strong>$5</strong></span>
                </div>
                <p className={styles.streetParking}>Street Parking also available around the area</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
