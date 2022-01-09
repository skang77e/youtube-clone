import React from "react";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const VideoPage = ({ selectedVideo, videoList, onRelatedVideos, onClick }) => {
  return (
    <>
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoList
        videoList={videoList}
        onClick={onClick}
        onRelatedVideos={onRelatedVideos}
      />
    </>
  );
};

export default VideoPage;
