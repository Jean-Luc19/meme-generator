import React from 'react';
import Toptext from './top-text';
import Bottomtext from './bottom-text';
import Mememedia from './meme-media';
export default class MemeCard extends React.Component {
  constructor() {
      super();
      this.state = {
          topText: '',
          bottomText: '',
          imgSrc: "http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487"
      }

      this.topChangeHandler = this.topChangeHandler.bind(this);
      this.bottomChangeHandler = this.bottomChangeHandler.bind(this);

  }
  
  topChangeHandler (e) {
      this.setState({topText: e.target.value})
  }

  bottomChangeHandler (e) {
      this.setState({bottomText: e.target.value})
  }
  render () {
      return (
        <div className="meme-card">
          <h1>Meme Generator</h1>
          <Toptext topText={this.topChangeHandler} />
          <Bottomtext bottomText={this.bottomChangeHandler} />
          <Mememedia topText={this.state.topText} bottomText={this.state.bottomText} imgSrc={this.state.imgSrc}/>
          <button>Submit</button>
        </div>
      );

  }

}
