import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-center text-lg-start mb-4">
            <img src={logo} alt="Micro logo" width="120" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt in felis malesuada mollis purus id sit in aliquet lectus eget morbi dui felis malesuada.
            </p>
          </div>

          <div className="col-lg-4 text-center">
            <h4 className={styles.footerTitle}>Stay Connected</h4>
            <p>Subscribe to our newsletter and stay updated with the latest news.</p>
          </div>

          <div className="col-lg-4 text-center text-lg-end">
            <h4 className={styles.footerTitle}>Contact Us</h4>
            <p>Email: <a href="mailto:contact@yourwebsite.com" className="text-light">contact@yourwebsite.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="text-light">+1 234 567 89</a></p>

            <div className="mt-3">
              <a href="#" className={styles.socialLink}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.socialLink}><i className="fab fa-twitter"></i></a>
              <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
              <a href="#" className={styles.socialLink}><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.footerLine} />

      <div className="text-center mt-3">
        <p className="mb-0">&copy; 2024 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
