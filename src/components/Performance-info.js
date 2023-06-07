import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  section,
  sectionHead,
  imageWrap,
  imageContainer,
  imageElement,
} from "./about.module.css"
import {
  videoContainer,
  videoWrap
} from "./video.module.css"
const Performance = () => {
    const data = useStaticQuery(graphql`
    query{
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
                  width: 400
                  aspectRatio: 1
                  transformOptions: {fit: COVER}
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
    console.log(performanceData);
    return(
    <section className={section}>
      <div className={sectionHead}>
      <h2>Performance</h2>
      <p>{performanceData.Performance}</p>
      </div>
      <div className={imageWrap}>
      {performanceData.images.map((image, index) => {
        return (<div className={imageContainer} key={index}>
          <GatsbyImage 
            image={getImage(image.src)} 
            alt={image.alt} className={imageElement}/>
          <p>{image.text}</p>
          </div>);
})}
      </div>
      <div className={videoContainer}>
      <div className={videoWrap}>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/258469872?h=3b1b6931b6" width="480" height="270" frameborder="0"    allowfullscreen></iframe>
        <p>The First time ever performance at an exhibition, 2Q18 at Testing Grounds in early 2018. This group exhibition was themed around a novel, 1Q84, by Haruki Murakami. Halfasian made 6 songs inspired by surreally realistic novel and performed at the opening event walking around and played at unregular intervals</p>
        </div>
      <div className={videoWrap}>
      <iframe width="480" height="270" src="https://www.youtube.com/embed/SWlkk6X15ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>First time ever playing with sound system and microphone at Brunswick Ballroom supporting Monnone Alone between lockdowns in 2021. How could we play sold out show under strict pandemic rules and restrictions that we do not know. </p>
      </div>
      <div className={videoWrap}>
        <iframe width="480" height="270" src="https://www.youtube.com/embed/V_KCngNhyu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>We lost all our senses for a little while when our inspiration <a href="https://burntsausages.bandcamp.com/album/the-white-bread-album">The burnt Sausages</a>invited us to play at a show with them. Still living with the hype and for ever.</p>
      </div>
      </div>
    </section>
    )
}

export default Performance