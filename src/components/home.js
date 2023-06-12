import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";


import {
 container,
 animatedImage,
 dc,
 eightyork,
 haha,
 h,
 a,
 anotherDc,
 anotherEightYork,
 secondImg,
 isItMusic,
} from "./home.module.css";


const Home = () => {
 return (
   <div className={container}>
     <div className={haha}>
       <div className={h}> H</div>
       <div className={a}>A</div>
     </div>


     {/* render images/ not dynamic with staticImage plugin */}
     <div className={animatedImage}>
       <p className={isItMusic}>Is it music?</p>
       {/* <p className={isItMusic}>where is the music?</p> */}
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
       <div className={secondImg}>
         <StaticImage
           className={anotherDc}
           alt="dc standing"
           src="../../assets/images/2HalfAsian.png"
         />
         <StaticImage
           className={anotherEightYork}
           alt="8 york dancing"
           src="../../assets/images/1HalfAsian.png"
         />
       </div>
     </div>
   </div>
 );
};


export default Home;
