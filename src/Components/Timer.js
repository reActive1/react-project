import React from "react";
import "./CssComponents/Timer.css";
import Countdown, {zeroPad} from "react-countdown";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Timer(props) {
    //total time countdown settings
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>You rock! Training session ended!</span>;
        } else {
            return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
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
        <h1><Countdown date={Date.now() + props.time} renderer={renderer} /></h1>
        <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={props.time/60/1000}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {renderTime}
        </CountdownCircleTimer>
        </div>
      </div>
    )
}

export default Timer;