import React from 'react';
import Toptext from './top-text';
import Bottomtext from './bottom-text';
import Mememedia from './meme-media';

export default function MemeCard(props) {
  return (
    <div className="meme-card">
      <h1>Meme Generator</h1>
      <Toptext topChangeHandler={props.topChangeHandler} topText={props.topText} />
      <Bottomtext bottomChangeHandler={props.bottomChangeHandler} bottomText={props.bottomText} />
      <Mememedia topText={props.topText} bottomText={props.bottomText} imgSrc={props.currentImg}/>
      <button>Submit</button>
    </div>
  );
}
