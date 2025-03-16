import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Podcasts.module.css";
import img from '../../Assets/images/home/podcast-3.png';
import { PodcastContext } from "../Context/getPodcasts";
import Loader from "../Loader/Loader"; 

const Podcasts = () => {
  const { getAllPodcasts } = useContext(PodcastContext);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    getAllPodcasts()
      .then((res) => {
        if (res.data) {
          setPodcasts(res.data);
        }
      })
      .catch((err) => console.error("Error fetching podcasts:", err))
      .finally(() => setLoading(false));
  }, []);



  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.podcastPage}>
      <div className={`${styles.podcast} container  p-3`} id="podcast">
        <ul className={styles.podcastList}>
          {podcasts.map((podcast) => (
            <li key={podcast._id}>
              <Link
                to={`/podcast/${podcast._id}`}
                className={styles.podcastCard}
                onClick={scrollToTop}
              >
                <figure className={styles.cardBanner}>
                  <img
                    src={
                      podcast.images &&
                      Array.isArray(podcast.images) &&
                      podcast.images.length > 0
                        ? `https://simpleupload-production.up.railway.app/${podcast.images[0]}` // Add base URL if needed
                        : img
                    }
                    alt={podcast.title || "Podcast image"}
                  />
                  <div className={styles.cardBannerIcon}>
                    <i className="fa-solid fa-play"></i>
                  </div>
                </figure>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{podcast.title}</h3>
                  <p className={styles.cardDescription}>{podcast.body}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Podcasts;
