
import './ChooseExrcise.css';
import React, { useState } from 'react';
import Form from "./component/Form";
import ExerciseList from "./component/ExerciseList";


function ChooseExrcise() {
  const [inputText, setInputText] = useState("");
  const [Exercises, setExercises] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Hi you! choose your exercise:  </h1>
      </header>
      <Form 
        setInputText={setInputText} 
        Exercises={Exercises}
        setExercises={setExercises}
        inputText={inputText}
        />
      <ExerciseList/>
    </div>
  );
};

export default ChooseExrcise;
