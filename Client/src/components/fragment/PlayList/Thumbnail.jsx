import React from 'react';
import shakedown from '../../assets/img/shakedown.jpg';
import "../scss/Thumbnail.css"

function Thumbnail(props) {
    return (
        <div class="thumbnail">
            <img class="thumbnail-image" src={shakedown} alt={shakedown}/>
            <div class="thumbnail-title">{props.title}</div>
        </div>
    );
}

export default Thumbnail;
