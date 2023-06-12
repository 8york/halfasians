import * as React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent =({videoUrl, title, className}) =>{
    return(
    
            <ReactPlayer
            url={videoUrl}
            title={title}
            width={480}
            height={270}
            frameborder="0"
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
       
    )
    }

export default VideoComponent