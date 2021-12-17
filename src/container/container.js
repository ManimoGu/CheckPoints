import React from 'react';
import './container.css';
import Video from '../Video/video.js';
import Square from '../square/square.js';




function Container(){

    return (
        <>
        <div className="container">

            <Video/>
            <Square/>
           
        </div>
        </>
    )
}

export default Container;