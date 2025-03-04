import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./PodcastDetails.module.css";
import { PodcastContext } from "../Context/getPodcasts";
import Loader from "../Loader/Loader";

const PodcastDetails = () => {
  const { id } = useParams();
  const { getAllPodcasts } = useContext(PodcastContext);
  const [podcast, setPodcast] = useState(null);
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
    <div className={`${styles.detailsPage} mt-5 py-5 `}>
      <div className={styles.podcastContainer}>
        
        {/* Podcast image */}
        <div className={styles.imageSection}>
          {podcast.images && podcast.images.length > 0 ? (
            <img src={podcast.images[0]} alt={podcast.title} className={styles.podcastImage} />
          ) : (
            <div className={styles.placeholder}></div>
          )}
        </div>

        {/* Podcast content */}
        <div className={styles.contentSection}>
          <h2 className={styles.title}>{podcast.title}</h2>
          <p className={styles.description}>{podcast.body}</p>

          {/* Audio playback */}
          {podcast.audio.length > 0 && (
            <div className={styles.audioSection}>
              <h3>🎧 Listen to the podcast</h3>
              <audio controls className={styles.audioPlayer}>
                <source src={podcast.audio[0]} type="audio/mp3" />
                Your browser does not support audio playback.
              </audio>
            </div>
          )}

          {/* Video playback */}
          {podcast.videos.length > 0 && (
            <div className={styles.videoSection}>
              <h3>🎥 Watch the podcast</h3>
              <video controls className={styles.videoPlayer}>
                <source src={podcast.videos[0]} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
