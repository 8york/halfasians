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
    text: "First time ever playing with sound system and microphone at Brunswick Ballroom supporting Monnone Alonebetween lockdowns in 2021. How could we play sold out show under strict pandemic rules and restrictions that we were sure that the show will be canceled. ",
  },
  {
    videoUrl: "https://www.youtube.com/embed/V_KCngNhyu8",
    text: "We lost all our senses for a little while when our inspiration The burnt Sausages invited us to play at a show with them. Still living with the hype and for ever.",
  },
];
const Performance = () => {
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
                  width: 250
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
            width="480"
            height="270"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <p className={vimeo}>
            The First time ever performance at an exhibition, 2Q18 at Testing
            Grounds in early 2018. This group exhibition was themed around a
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
            <p>{video.text}</p>
          </div>
        ))}
      </div>
          </>
      )
      }

export default Performance;
