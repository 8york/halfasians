import * as React from "react";
import VideoComponent from "./video-usable";
import { videoContainer, videoWrap } from "./video.module.css";

const videos = [
  {
    videoUrl: "https://www.youtube.com/embed/b9fVx5yoSto",
    text: "Halfasian is a big fan of Mark from  Monnone Alone and spends quite a bit of time talking about him at band meetings. Often sighted at a local park, Randazzo, Halfasian decided to write a song about/for Mark for his birthday and dedicate a music video for his birthday gift",
  },
  {
    videoUrl: "https://www.youtube.com/embed/F3xyUW0Yvy4",
    text: "Halfasian has made  a few songs for episodes on DC stylefylez. This is one of the song for Autumn Lookbook episode. ",
  },
  {
    videoUrl: "https://www.youtube.com/embed/TqFcgSSBxQ4",
    text: "A song dedicted to Arnold Schwarzneger. Halfasian played the same song over and over at Arnie Classics event with a hope to run into our idol, but security was tight and we were sent out. Then came a person with a medal with a lot of muscle so took a photo.",
  },
];
const Video = () => {
  return (
    <>
      <h2> Videos</h2>
      <div className={videoContainer}>
      {videos.map((video, index) => (
        <div key={index} className={videoWrap}>
          <VideoComponent videoUrl={video.videoUrl} title={video.title} className={video} />
          <p>{video.text}</p>
        </div>
      ))}
      </div>
    </>
  );

 }

export default Video;
