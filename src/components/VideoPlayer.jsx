import React from "react";

const VideoPlayer = ({ selectedVideo }) => {
  let videoId;
  if (typeof selectedVideo.id === "string") {
    videoId = selectedVideo.id;
  } else {
    videoId = selectedVideo.id.videoId;
  }

  const title = selectedVideo.snippet.title;
  const description = selectedVideo.snippet.description;
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  return (
    <>
      <iframe title={title} width='800' height='400' src={videoSrc}></iframe>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default VideoPlayer;
