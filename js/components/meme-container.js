// Title
// list of possible Meme Pictures
import React from 'react';
import MemeCard from './meme-card';
import imageArray from './images'

export default class MemeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            editArea: false,
            topText: '',
            bottomText: '',
            imgSrc: "http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487",
            images: imageArray
        }

        this.topChangeHandler = this.topChangeHandler.bind(this);
        this.bottomChangeHandler = this.bottomChangeHandler.bind(this);
        this.displayEditArea = this.displayEditArea.bind(this);

    }

    topChangeHandler (e) {
        this.setState({topText: e.target.value})
    }

    bottomChangeHandler (e) {
      console.log(this.state.bottomText);
        this.setState({bottomText: e.target.value})
    }

    cardBuilder (e, img) {
      console.log(img);
      this.setState({topText: ""})
      this.setState({bottomText: ""})
      this.setState({imgSrc: img})
    }

    displayEditArea(shouldDisplay){
        if (!shouldDisplay) {
            return this.setState({ editArea: false, topText: '', bottomText: '', imgSrc: '' });
        }

        this.setState({ editArea: true });
    }

    handleImageClick(e, img) {
        this.cardBuilder(e, img);
        this.displayEditArea(true);
    }


  render() {
    return (
        <div className="image-list">
            <ul>
                {this.state.images.map((img, index) =>
                  <li><img src={img} onClick={e => this.handleImageClick(e, img)} key={index} /></li>)}
            </ul>
            <MemeCard topText={this.state.topText}
                      bottomText={this.state.bottomText}
                      topChangeHandler={this.topChangeHandler}
                      bottomChangeHandler={this.bottomChangeHandler}
                      currentImg={this.state.imgSrc}
                      isDisplaying={this.state.editArea}
                      displayEditArea={this.displayEditArea}

            />
        </div>
    );
  }
}
