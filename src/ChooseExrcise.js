import './ChooseExrcise.css';
import React, { useState } from 'react';
import Form from "./Components/Form";
import ExerciseList from "./Components/ExerciseList";
import Timer from './Components/Timer';

// import ReactDOM from 'react-dom';
function ChooseExrcise(props) {
  const {trainingtime} = props.location.state
  const [inputText, setInputText] = useState("");
  const [Exercises, setExercises] = useState([]);
  return (
    <div className="App">
      console.log({trainingtime})
      <header>

        <h1> Hi you! choose your exercise:  </h1>
      </header>
      <Form
        setInputText={setInputText} 
        Exercises={Exercises}
        setExercises={setExercises}
        inputText={inputText}
        />

      <ExerciseList  
        Exercises={Exercises}
        setExercises={setExercises}
      />
    </div>
  );
};

export default ChooseExrcise;
