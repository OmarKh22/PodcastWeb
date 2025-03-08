import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Assets/images/logo.svg";
import podcastHome from "../../Assets/images/home/podcastHome.png";


const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 text-center text-lg-start mb-4">
            <img src={podcastHome} alt="Micro logo" width="150" />
            <p>
              [Podcast Name] is a platform where engaging conversations and
              insightful discussions come to life. Tune in to explore diverse
              topics, hear from inspiring guests, and discover stories that
              inform, entertain, and inspire. 🎙️✨
            </p>
          </div>

          {/* <div className="col-lg-4 text-center">
            <h4 className={styles.footerTitle}>Stay Connected</h4>
            <p>
              Subscribe to our newsletter and stay updated with the latest news.
            </p>
          </div> */}

          <div className="col-lg-4 text-center text-lg-end">
            <h4 className={styles.footerTitle}>Contact Us</h4>
            <p>
              Email:{" "}
              <a href="mailto:contact@yourwebsite.com" className="text-light">
                contact@yourwebsite.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+123456789" className="text-light">
                +1 234 567 89
              </a>
            </p>

            <div className="mt-3">
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.footerLine} />

      <div className="text-center mt-3">
        <p className="mb-0">&copy; 2025 Podcast. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
