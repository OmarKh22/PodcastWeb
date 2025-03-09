import React from 'react';
import styles from './Home.module.css';
import Podcasts from '../Podcasts/Podcasts';

const Home = () => {
  return (
    <>
      <section className={styles.homePage}>
        <main className={`container ${styles.container}`}>
          <section className={`${styles.homePage}`}>
            <main className={`container ${styles.container}`}>
              <section id="hero" className={`row ${styles.hero}`}>
                <div className="col-12">
                  <div className={styles.heroContent}>
                    <p
                      className={`${styles.heroText} text-center`}
                    >
                      منصة إلهام حيث يلتقي الإلهام بالإبداع لطالما أُحطنا بشخصيات
                      ملهمة، تركت بصماتها في مختلف المجالات، لكن بعضها ظلت خلف
                      الكواليس بعيدًا عن الأضواء. أشخاص يملكون قصصًا تستحق أن
                      تُروى، وتجارب مليئة بالدروس، لكن لم تتح لنا فرصة التعرف
                      عليهم عن قرب أو الاستفادة من رحلاتهم الملهمة. من هنا،
                      وُلدت منصة إلهام، برؤية واضحة ورسالة سامية: دعم الملهمين.
                      نؤمن أن لكل شخص قصة تستحق أن تُسمع، ولكل تجربة قيمة يمكن
                      أن تكون شرارة إلهام لغيره. لذا، قررنا أن نسلط الضوء على
                      هذه الشخصيات، ونعطيها المساحة التي تستحقها، لنكون جسرًا
                      بين الإلهام وأولئك الذين يبحثون عنه. <br /> منصة إلهام.. حيث
                      يلتقي الإلهام بالإبداع، وتُروى القصص التي تستحق أن تُسمع..
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </section>
        </main>
      </section>


      <Podcasts />
    </>
  );
};

export default Home;
