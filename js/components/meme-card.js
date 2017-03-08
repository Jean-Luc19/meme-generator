import React from 'react';

export default class MemeCard extends React.Component {
  constructor() {
      super();
      this.state = {
          topText: '',
          bottomText: ''
      }

      this.topChangeHandler = this.topChangeHandler.bind(this);
      this.bottomChangeHandler = this.bottomChangeHandler.bind(this);

  }
  topChangeHandler (e) {
      this.setState({topText: e.target.value})
      console.log(this.state.topText, e.target.value);
  }

  bottomChangeHandler (e) {
      this.setState({bottomText: e.target.value})
      console.log("hello");
  }
  render () {
      return (
        <div className="meme-card">
          <h1>Meme Generator</h1>
          <label>Top Text: </label>
          <input type="text" onChange={this.topChangeHandler}/>
          <label>Bottom Text: </label>
          <input type="text" onChange={this.bottomChangeHandler}/>
          <div className="meme-container">
            <img className="current-image" src="http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487"></img>
            <p className="top-text">{this.state.topText}</p>
            <p className="bottom-text">{this.state.bottomText}</p>
          </div>
          <button>Submit</button>
        </div>
      );

  }

}
