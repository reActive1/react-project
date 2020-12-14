import React from "react";
import ReactDOM from "react-dom";
import "./CssComponents/Timer.css";
import BirdDog from "./gifExercise/BirdDog.gif"
import CatCow from "./gifExercise/CatCow.gif"
import Superman from "./gifExercise/Superman.gif"

class StartExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
       {name: BirdDog, time: 5000},
       {name: Superman, time: 10000},
       {name: CatCow, time: 40000}
      ]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, this.state.images[this.state.currentImage].time);
  }
   
  render() {
    
    return (
    
      <div className="slideshow-container">
        <img
          className = "gifExercise"
          src={this.state.images[this.state.currentImage].name}
          value={this.state.images[this.state.currentImage].time}
          alt="cleaning images"
        />
      </div>
    );
  }
}

export default StartExerciseList;

