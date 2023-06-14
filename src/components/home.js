import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  dc,
  eightyork,
  sticker,
  haha,
  h,
  a,
  animationContainer,
  isItMusic,
} from "./home.module.css";

const Home = () => {
  return (
    <div className={container}>
      <div className={haha}>
        <div className={h}> H</div>
        <div className={a}>A</div>
      </div>
      <p className={isItMusic}>Is it music?</p>
      {/* render images/ not dynamic with staticImage plugin */}
      <div className={animationContainer}>
        <StaticImage
          className={dc}
          alt="DC dancing all over the screen"
          src="../../assets/images/3HalfAsian.png"
        />
        <StaticImage
          className={eightyork}
          alt="8 york dancing"
          src="../../assets/images/4HalfAsian.png"
        />
        <StaticImage
          className={sticker}
          alt="close up image of halfasian in a shape of a cirlcle"
          src="../../assets/images/haa.png"
        />
      </div>
    </div>
  );
};

export default Home;
