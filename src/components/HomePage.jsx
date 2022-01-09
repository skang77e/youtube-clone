import React from "react";
import VideoList from "./VideoList";

const HomePage = ({ videoList, onClick, onRelatedVideos }) => (
  <>
    <VideoList
      videoList={videoList}
      onClick={onClick}
      onRelatedVideos={onRelatedVideos}
    />
  </>
);

export default HomePage;
