import React, {useState} from "react";
import "./CssComponents/Timer.css";
import {FaPauseCircle, FaPlayCircle} from "react-icons/fa";
import Countdown, {zeroPad} from "react-countdown";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Timer(props) {
  let countdownApi = null;
  const [isPlaying, setIsPlaying] = useState(true);
  const [time, setTime] = useState(Date.now()+props.time); 
  const [duration, setDuration] = useState(props.time/60/1000); //Should be updated with exercise time

  const setRef = countdown => {
    if (countdown) {
      countdownApi = countdown.getApi();
    }
  };

    const handlePauseClick = () => {
      countdownApi && countdownApi.pause();
    };

    const handleStartClick = () => {
      countdownApi && countdownApi.start();
    };

    //total time countdown settings
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>You rock! Training session ended!</span>;
        } else {
            return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
        }
    }

    const displayPauseOrResumeButton = () => {
      if (isPlaying) {
        return (
          <FaPauseCircle size={40} color='teal' onClick = {() => {setIsPlaying(false); handlePauseClick();}} />
        )
      } else {
        return (
          <FaPlayCircle size={40} color='teal' onClick = {() => {setIsPlaying(true); handleStartClick();}} />
        )
      }
    }

    //exercise time countdown settings
    const renderTime = ({ remainingTime }) => {
      if (remainingTime === 0) {
        return <div className="timer">Great!</div>;
      }
      return (
        <div className="timer"> 
          <div className="text">Remaining</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
    };

    return (
      <div className="timers">
        <h1><Countdown date={time} renderer={renderer} ref={setRef} /></h1>
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={duration}
            colors={[
              ['#004777', 0.33],
              ['#F7B801', 0.33],
              ['#A30000', 0.33],
            ]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <div className="button-wrapper">
          {displayPauseOrResumeButton()}
        </div>
      </div>
    )
}

export default Timer;