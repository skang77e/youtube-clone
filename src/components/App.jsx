import { useEffect, useState } from "react";
import "../css/app.css";
import youtube from "../api/youtube";
import Header from "./Header";
import HomePage from "./HomePage";
import VideoPage from "./VideoPage";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState(null);

  const handleSubmit = async (keyword) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        q: keyword,
        maxResults: 50,
      },
    });
    setVideos(response.data.items);
  };

  const handleClick = (video) => {
    setSelectedVideo(video);
  };

  const handleAfterSearch = () => {
    setSelectedVideo(null);
  };

  const handleRelatedVideos = async (videoId) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: videoId,
        type: "video",
        maxResults: 50,
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await youtube.get("/videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          maxResults: 50,
          regionCode: "US",
        },
      });
      setVideos(response.data.items);
    }
    fetchData();
  }, []);
  return (
    <div className='App'>
      <Header onAfterSearch={handleAfterSearch} onSearch={handleSubmit} />
      {videos && !selectedVideo && (
        <HomePage
          videoList={videos}
          onClick={handleClick}
          onRelatedVideos={handleRelatedVideos}
        />
      )}
      {videos && selectedVideo && (
        <VideoPage
          selectedVideo={selectedVideo}
          videoList={videos}
          onRelatedVideos={handleRelatedVideos}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default App;
