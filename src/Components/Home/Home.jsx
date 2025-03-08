import React from 'react';
import styles from './Home.module.css';
import podcastHome from "../../Assets/images/home/podcastHome.png";
import HomeImg from "../../Assets/images/home/HomeImg.jpg";
import Podcasts from '../Podcasts/Podcasts';

const Home = () => {
  return (
    <>
      <section className={styles.homePage}>
        <main className={`container ${styles.container}`}>
          <section
            id="hero"
            className={`row align-items-center ${styles.hero}`}
          >
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              <div className={styles.heroContent}>
                <img
                  src={podcastHome}
                  alt="Podcast"
                  className={styles.heroTitle}
                />
                <p className={styles.heroText}>
                  منصةإلهام حيث يلتقي الإلهام بالإبداع لطالما أُحطنا بشخصيات
                  ملهمة، تركت بصماتها في مختلف المجالات، لكن بعضها ظلت خلف
                  الكواليس بعيدًا عن الأضواء. أشخاص يملكون قصصًا تستحق أن تُروى،
                  وتجارب مليئة بالدروس، لكن لم تتح لنا فرصة التعرف عليهم عن قرب
                  أو الاستفادة من رحلاتهم الملهمة. من هنا، وُلدت منصة إلهام،
                  برؤية واضحة ورسالة سامية: دعم الملهمين. نؤمن أن لكل شخص قصة
                  تستحق أن تُسمع، ولكل تجربة قيمة يمكن أن تكون شرارة إلهام
                  لغيره. لذا، قررنا أن نسلط الضوء على هذه الشخصيات، ونعطيها
                  المساحة التي تستحقها، لنكون جسرًا بين الإلهام وأولئك الذين
                  يبحثون عنه.
                </p>
                <div className={`${styles.heroBtnGroup}`}>
                  <button className={`btn btn-primary ${styles.btn}`}>
                    <span>Listen Now</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
              <div
                className={styles.heroBanner}
                role="img"
                aria-label="Hero banner"
              >
                <img src={HomeImg} alt="Podcast Banner" loading="lazy" />
              </div>
            </div>
          </section>
        </main>
      </section>
      <Podcasts />
    </>
  );
};

export default Home;
