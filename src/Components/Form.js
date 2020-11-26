import React, { useState } from 'react';
import {Exercises as E1 } from "../Common/Enums";
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react'
import {getRandomExercise} from './RandomExercise'

const Form = ({setInputText,Exercises, setExercises,inputText}) => {
    var [selectedExercise, setSelectedExercise] = useState([]);
    var [selectedRandom, setRandomExercise] = useState("");
    const [selectedExerciseList, setSelectedExerciseList] = useState(null);
    const convertToArray = (obj) => {
        return Object.keys(obj).map((key) => {
            return { id: key, name: obj[key] };
        });
    }



    const setSelectedExersiceHandler = (event) => {
        selectedExercise = convertToArray(E1[event.target.value]);
        setSelectedExerciseList(selectedExercise.length > 0 && selectedExercise.map((item, i) => {
            return (
                <option key={i} value={item.id}>{item.name}</option>
            )
        }, this));
    }
    
    const randomFunctionHandler = (e) => {
        e.preventDefault();
      /* First way to show*/
      //  setRandomExercise(selectedRandom = getRandomExercise(getRandomExercise(E1))); 
        setRandomExercise(selectedRandom = () => {
            return(
                <div>
                    {getRandomExercise(getRandomExercise(E1))}
                </div>
            )
        });
    }
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }

    const sumbitExerciseHandler = (e) => {
        e.preventDefault();
        setExercises([...Exercises,
            {text: inputText,completed : false, id: Math.random()*1000}]);
        setInputText("");
    }
        return(
            <form>
                <div><button onClick={randomFunctionHandler} className="random-exercise-button"> Start random exercise!</button></div>
                <button onClick={sumbitExerciseHandler} className="exercise-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>         
                <div className="select">
                    <select name="custom" className="filter-exercises" onChange={inputTextHandler}>
                        {selectedExerciseList}
                    </select>
                </div>
                <div className="select">
                    <select onChange={setSelectedExersiceHandler} name="exercises" className="filter-exercises">
                        {/* <option value="All">All</option> */}
                        <option value="Back">Back exercises</option>
                        <option value="Legs">Legs exercises</option>
                        <option value="Abs">Abs exercises</option>
                        <option value="Shoulders">Shoulders exercises</option>
                        <option value="FullBody">FullBody exercises</option>
                        <option value="Chest">Chest exercises</option>
                    </select>
                </div>  
                {selectedRandom}
            </form> 
        );
}


export default Form;