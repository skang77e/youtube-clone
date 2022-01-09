import React from "react";
import VideoCard from "./VideoCard";
import styles from "../css/video_list.module.css";

const VideoList = ({ videoList, onClick, onRelatedVideos }) => {
  const filteredArray = videoList.filter((video) => {
    if (video.snippet) {
      return video;
    }
  });

  return (
    <ul className={styles.container}>
      {filteredArray.map((video) => {
        return (
          <VideoCard
            key={video.etag}
            video={video}
            onClick={onClick}
            onRelatedVideos={onRelatedVideos}
          />
        );
      })}
    </ul>
  );
};
export default VideoList;
