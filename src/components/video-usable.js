import * as React from 'react';
import ReactPlayer from 'react-player';

const VideoComponent =({videoUrl, title, className}) =>{
    return(
        <div>
            <ReactPlayer
            url={videoUrl}
            title={title}
            width="425"
            height="270"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
        />
            </div>
    )
    }

export default VideoComponent