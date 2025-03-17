import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./PodcastDetails.module.css";
import { PodcastContext } from "../Context/getPodcasts";
import Loader from "../Loader/Loader";
import img from "../../Assets/images/home/podcast-3.png";

const PodcastDetails = () => {
  const { id } = useParams();
  const { getAllPodcasts } = useContext(PodcastContext);
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    getAllPodcasts()
      .then((res) => {
        if (res?.data && Array.isArray(res.data)) {
          const selectedPodcast = res.data.find((p) => p._id === id);
          setPodcast(selectedPodcast || null);
        }
      })
      .catch((err) => console.error("Error fetching podcast details:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className={styles.detailsPage}>
      <div className={styles.podcastContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>{podcast.title}</h1>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.imageAndDescription}>
            <div className={styles.imageSection}>
              {podcast.images && podcast.images.length > 0 ? (
                <img
                  className={styles.podcastImage}
                  src={
                    podcast.images &&
                    Array.isArray(podcast.images) &&
                    podcast.images.length > 0
                      ? `https://simpleupload-production.up.railway.app/${podcast.images[0]}`
                      : img
                  }
                  alt={podcast.title || "Podcast image"}
                />
              ) : (
                <div className={styles.placeholder}></div>
              )}
            </div>

            <div className={styles.descriptionContainer}>
              <h3 className={styles.descriptionTitle}>عن هذه الحلقة</h3>
              <p className={styles.description}>{podcast.body}</p>
            </div>
          </div>

          <div className={styles.mediaSection}>
            <div className={styles.audioContainer}>
              <h3 className={styles.mediaTitle}>
                <span className={styles.icon}>🎧</span> استمع إلى البودكاست
              </h3>
              {podcast.audio &&
              Array.isArray(podcast.audio) &&
              podcast.audio.length > 0 ? (
                <audio controls className={styles.audioPlayer}>
                  <source
                    src={`https://simpleupload-production.up.railway.app/${podcast.audio[0]}`}
                    type="audio/mp3"
                  />
                  Your browser does not support audio playback.
                </audio>
              ) : (
                <p className={styles.noMedia}>
                  لا يوجد ملف صوتي متاح لهذا البودكاست
                </p>
              )}
            </div>

            <div className={styles.videoContainer}>
              <h3 className={styles.mediaTitle}>
                <span className={styles.icon}>🎥</span> شاهد البودكاست
              </h3>
              {podcast.videos &&
              Array.isArray(podcast.videos) &&
              podcast.videos.length > 0 ? (
                <div className={styles.videoSection}>
                  <video controls className={styles.videoPlayer}>
                    <source
                      src={`https://simpleupload-production.up.railway.app/${podcast.videos[0]}`}
                      type="video/mp4"
                    />
                    Your browser does not support video playback.
                  </video>
                </div>
              ) : (
                <p className={styles.noMedia}>
                  لا يوجد فيديو متاح لهذا البودكاست
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
