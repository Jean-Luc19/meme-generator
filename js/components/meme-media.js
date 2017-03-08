import React from 'react';

export default function Mememedia (props) {
    return (
        <div className="meme-container">
          <img className="current-image" src={props.imgSrc}></img>
          <p className="top-text">{props.topText}</p>
          <p className="bottom-text">{props.bottomText}</p>
        </div>
    );
}
