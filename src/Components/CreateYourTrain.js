import "./CssComponents/CreateYourTrain.css";
import React from 'react';

class CreateYourTrain extends React.Component {
      constructor(props) {
            super(props);
         this.runChooseTotalTime = this.runChooseTotalTime.bind(this);
      }

      runChooseTotalTime () {
        window.location.pathname = "/ChooseTotalTime";
      }

    render(){
        return (
          <div className="CreateYourTrain">
             <button onClick = {this.runChooseTotalTime} > Start your train! </button>
          </div>
        );
    }
}

export default CreateYourTrain;