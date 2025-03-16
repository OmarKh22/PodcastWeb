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

        {/* Podcast content */}
          <h2 className={styles.title}>{podcast.title}</h2>
          <p className={styles.description}>{podcast.body}</p>
          
          <div className={styles.imageSection}>
            {podcast.images && podcast.images.length > 0 ? (
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
            ) : (
              <div className={styles.placeholder}></div>
            )}
          </div>


        <div className={styles.contentSection}>
          {/* Audio playback */}
          <div>
          <h3>🎧 استمع إلى البودكاست</h3>
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
            <p>No audio available for this podcast.</p>
          )}
          </div>

          {/* Video playback */}
          <div>
          <h3>🎥 شاهد البودكاست</h3>
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
            <p>No Video available for this podcast.</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
