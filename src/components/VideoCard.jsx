import React from "react";
import styles from "../css/video_card.module.css";

const VideoCard = ({ video, onClick, onRelatedVideos }) => {
  const handleClick = () => {
    onClick(video);
    let videoId = video.id;

    if (typeof videoId === "string") {
      onRelatedVideos(video.id);
    } else {
      onRelatedVideos(video.id.videoId);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <li className={styles.card} onClick={handleClick}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
        className={styles.thumbnail}
      />
      <div className={styles.description}>
        <p className={styles.title}>{video.snippet.title}</p>
        <p className={styles.channel_name}>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoCard;
