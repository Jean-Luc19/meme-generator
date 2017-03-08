import React from 'react';
import Toptext from './top-text';
import Bottomtext from './bottom-text';
import Mememedia from './meme-media';

export default function MemeCard(props) {
  return (
    <div className={`meme-card ${props.isDisplaying ? '' : 'hidden'}`}>
      <Toptext topChangeHandler={props.topChangeHandler} topText={props.topText} />
      <Bottomtext bottomChangeHandler={props.bottomChangeHandler} bottomText={props.bottomText} />
      <Mememedia topText={props.topText} bottomText={props.bottomText} imgSrc={props.currentImg}/>
      <button>Submit</button>
      <button onClick={() => props.displayEditArea(false)}>Cancel</button>
    </div>
  );
}
