import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import VideoComponent from "./video-usable";
import {
  section,
  sectionHead,
  imageWrap,
  imageContainer,
  imageElement,
  imageText,
  textAndImages,
} from "./about.module.css";

import { videoContainer, videoWrap, vimeo } from "./video.module.css";

const videos = [
  {
    videoUrl: "https://www.youtube.com/embed/SWlkk6X15ho",
    text: "First time ever playing with sound system and microphone at Brunswick Ballroom supporting <a href='https://monnonealone.bandcamp.com/' target='_blank'>Monnone Alone</a> between lockdowns in 2021. How could we play sold out show under strict pandemic rules and restrictions that we were sure that the show will be canceled. ",
  },
  {
    videoUrl: "https://www.youtube.com/embed/V_KCngNhyu8",
    text: "We lost all our senses for a little while when our inspiration <a href='https://burntsausages.bandcamp.com/album/the-white-bread-album' target='_blank'>The burnt Sausages</a> invited us to play at a show with them. Still living with the hype and for ever."
  },
];
const Performance = () => {
  // access images alt and text from json file
  const data = useStaticQuery(graphql`
    query {
      allPerformanceJson {
        nodes {
          images {
            alt
            text
            src {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  width: 300
                  aspectRatio: 1
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
          Performance
        }
      }
    }
  `);

  const performanceData = data.allPerformanceJson.nodes[0];
  return (
    <>
      <section className={section}>
        <div className={textAndImages}>
          <div className={imageWrap}>
            {performanceData.images.map((image, index) => (
              <div className={imageContainer} key={index}>
                <GatsbyImage
                  image={getImage(image.src)}
                  alt={image.alt}
                  className={imageElement}
                />
                <p className={imageText}>{image.text}</p>
              </div>
            ))}
          </div>

          <div className={sectionHead}>
            <h2>Performance</h2>
            <p>{performanceData.Performance}</p>
          </div>
        </div>
      </section>

      <div className={videoContainer}>
        <div className={videoWrap}>
          {/* vimeo could not be rendered with using the reusable component as it is set for youtube so hard-coded */}
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/258469872?h=3b1b6931b6"
            width="400"
            height="253"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <p className={vimeo}>
            The First time ever performance for Halfasian was at a group exhibition 2Q18 at Testing
            Grounds curated by <a href="https://www.thewanderingroom.org/" target='_blank'>the wandering room</a> in early 2018. This group exhibition was themed around a
            novel, 1Q84, by Haruki Murakami. Halfasian made 6 songs inspired by
            surreal but realistic novel and performed at the opening event
            walking around and played at unregular intervals
          </p>
        </div>
        {/* rendering youtube videos using the data */}
        {videos.map((video, index) => (
          <div key={index} className={videoWrap}>
            <VideoComponent
              videoUrl={video.videoUrl}
              width={video.width}
              height={video.height}
              title={video.title}
              className={video}
            />
            <p dangerouslySetInnerHTML={{__html: video.text}}></p>
            {/* <p>{video.text}</p> */}
          </div>
        ))}
      </div>
          </>
      )
      }

export default Performance;
