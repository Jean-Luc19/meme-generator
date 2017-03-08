// Title
// list of possible Meme Pictures
import React from 'react';

export default class MemeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            imgSrc: "http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487",
            images: ["http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487", "http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487", "http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487","http://hung-meme-maker.herokuapp.com/system/photos/images/000/000/001/thumb/AintNobody.jpg?1374553487"]
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



  render() {
    return (
        <div className="image-list">
            <ul>
                {this.state.images.map(img => <li><img src={img} /></li>)}
            </ul>
        </div>
    );
  }
}
