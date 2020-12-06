import React from "react";
import "./CssComponents/ChooseTotalTime.css";
import {NavLink} from 'react-router-dom';
import { Button } from "semantic-ui-react";
import Timer from './Timer';
import ChooseExrcise from "../ChooseExrcise.js";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class ChooseTotalTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      trainingtime: 0,
      restTime: 0 };
    this.updateTrainingTime = this.updateTrainingTime.bind(this);
    this.updateRestTime = this.updateRestTime.bind(this);
  }


  updateTrainingTime = (trainingtime) => {
    this.setState({
      trainingtime: trainingtime * 60 * 1000})
  };

  updateRestTime = (restTime) => {
      this.setState({
      restTime: restTime
      })
    };

  render() {
     if ((this.state.trainingtime == 0) || (this.state.restTime == 0)) {
      return (
        <div>
        <div className="TrainingTimeSelection">
          <h1>Select training time (in minutes):</h1>
          <Button.Group>
            <Button className="yellow" onClick={() =>  this.updateTrainingTime(20)}>20</Button>
            <Button.Or />
            <Button className="orange" onClick={() => this.updateTrainingTime(30)}>30</Button>
            <Button.Or />
            <Button className="red" onClick={() => this.updateTrainingTime(40)}>40</Button>
          </Button.Group>
        </div>
        <div className="RestTimeSelection">
                  <h1>Select rest time (in seconds):</h1>
                  <Button.Group>
                    <Button className="DeepSkyBlue" onClick={() =>  this.updateRestTime(20)}>20</Button>
                    <Button.Or />
                    <Button className="Blue " onClick={() => this.updateRestTime(30)}>30</Button>
                    <Button.Or />
                    <Button className="DarkBlue" onClick={() => this.updateRestTime(40)}>40</Button>
                  </Button.Group>
            </div>
         </div>
      );
      } else {
        return (
          <div className="ContinueLink">
             <NavLink to = {{
              pathname: `/ChooseExrcise/${this.state.trainingtime}/${this.state.restTime}`
                       }}>
                    Continue to choose exercises
               </NavLink>
           </div>
        )
        }
     }
  }

export default ChooseTotalTime;