import React from "react";
import "./CssComponents/ChooseTotalTime.css";
import { Button } from "semantic-ui-react";
import Timer from './Timer';

class ChooseTotalTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isStarted: false,
      totalDuration: 0 };
    this.trainningTime = this.trainningTime.bind(this);
  }

  trainningTime = (totalTime) => {
    this.setState({
      totalDuration: totalTime * 60 * 1000,
      isStarted: true})
  };
  
  //reset isStarted to false when completing or stopping training 
  stopTraining = () => {
    this.setState({isStarted: false})
  }

  render() {
    if(!this.state.isStarted) {
      return (
        <div className="TimeSelection">
          <h1>Select training time (in minutes):</h1>
          <Button.Group>
            <Button className="yellow" onClick={() => this.trainningTime(20)}>20</Button>
            <Button.Or />
            <Button className="orange" onClick={() => this.trainningTime(30)}>30</Button>
            <Button.Or />
            <Button className="red" onClick={() => this.trainningTime(40)}>40</Button>
          </Button.Group>
        </div>
      );    
    } else {
      return (
        <Timer time={this.state.totalDuration} />
      )
    }
  }
}

export default ChooseTotalTime;