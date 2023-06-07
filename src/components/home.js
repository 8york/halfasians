import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container, animatedImage, dc, eightyork, haha, h, a } from './home.module.css';

const Home =()=>{
    return(
        <div className={container}>
            <div className={haha}>
            <div className={h}> H</div>
            <div className={a} >A</div>
            </div>
            <div className={animatedImage}>
            <StaticImage className={dc}
        alt="DC dancing all over the screen"
        src="../../assets/images/3HalfAsian.png"
      />
            </div>
            <div className={animatedImage}>
            <StaticImage className={eightyork}
        alt="8 york dancing"
        src="../../assets/images/4HalfAsian.png"
      />
            </div>
            <p>Is it music?</p>
            <p>where is the music?</p>
        </div>
    )
}

export default Home