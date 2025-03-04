import React from 'react';
import styles from './Home.module.css';
import title from '../../Assets/images/home/hero-title.png';
import heroImg from '../../Assets/images/home/hero-banner.png';
import Podcasts from '../Podcasts/Podcasts';

const Home = () => {



  
  
  return (
    <>
      <section className={styles.homePage}>
        <main className={`container ${styles.container}`}>
          <section id="hero" className={`row align-items-center ${styles.hero}`}>
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              <div className={styles.heroContent}>
                <img src={title} alt="Podcast" className={styles.heroTitle} />
                <p className={styles.heroText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt in felis malesuada mollis purus id sit in aliquet lectus eget morbi dui felis.
                </p>
                <div className={`${styles.heroBtnGroup}`}>
                  <button className={`btn btn-primary ${styles.btn}`}>
                    <span>Listen Now</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <div className={styles.heroBanner} role="img" aria-label="Hero banner">
                <img src={heroImg} alt="Podcast Banner" loading="lazy" />
              </div>
            </div>
          </section>
        </main>

      </section>
      <Podcasts/>

    </>
  );
};

export default Home;
