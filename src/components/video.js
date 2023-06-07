import * as React from "react";
import {
    videoContainer,
    videoWrap
} from "./video.module.css"
const Video = () => {
    return(
        <div className={videoContainer}>
        <div className={videoWrap}>
          <iframe
            width="425"
            height="270"
            src="https://www.youtube.com/embed/b9fVx5yoSto"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p>Halfasian is a big fan of Mark from <a href="https://monnonealone.bandcamp.com/"> Monnone Alone</a> and spends quite a bit of time talking about him at band meetings. Often sighted at a local park, Randazzo, Halfasian decided to write a song about/for Mark for his birthday and dedicate a music video for his birthday gift</p>
        </div>
        <div className={videoWrap}>
        <iframe width="425" height="270" src="https://www.youtube.com/embed/F3xyUW0Yvy4" title="Autumn Lookbook" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Halfasian has made  a few songs for episodes on DC stylefylez. This is one of the song for Autumn Lookbook episode. </p>
        </div>
        <div className={videoWrap}>
        <iframe
          width="425"
          height="270"
          src="https://www.youtube.com/embed/TqFcgSSBxQ4"
          title="Arnie will be Back"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p>A song dedicted to Arnold Schwarzneger. Halfasian played the same song over and over at Arnie Classics event with a hope to run into our idol, but security was tight and we were sent out. Then came a person with a medal with a lot of muscle so took a photo.</p>
      </div>
      </div>
    )
}

export default Video