import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container } from './home.module.css';

const Home =()=>{
    return(
        <div className={container}>
        {/* <StaticImage src="../imgs/logo.jpg" alt="logo" style={{height: "800px"}} /> */}
        {/* <div className={container} style={{ backgroundImage: `url(${require('../imgs/logo.jpg').default})` }}> */}
        <div className={container}>
            <p>where is the img?</p>
        </div>
        </div>
    )
}

export default Home