import React, { useState } from 'react';
import {Exercises as E1 } from "../Common/Enums";
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react'
import {getRandomExercise} from './RandomExercise'

const Form = ({setInputText,Exercises, setExercises,inputText}) => {
    var [selectedExercise, setSelectedExercise] = useState([]);
    const [selectedExerciseList, setSelectedExerciseList] = useState(null);
    const convertToArray = (obj) => {
        return Object.keys(obj).map((key) => {
            return { id: key, name: obj[key] };
        });
    }



    const setSelectedExersiceHandler = (event) => {

        selectedExercise = convertToArray(E1[event.target.value]);
        console.log(selectedExercise);
        setSelectedExerciseList(
            selectedExercise.length > 0
            && selectedExercise.map((item, i) => {
            return (
                <option key={i} value={item.id}>{item.name}</option>
            )
        }, this));
        console.log(selectedExerciseList);
    }
    
//    const returnRandomFunction = (e) =>{
//    e.preventDefault();
//    var item = getRandomExercise(getRandomExercise(E1));
//    console.log(item);
//    return (
//              <div>
//               <h1> rachelii </h1>
//                  <h1> item </h1>
//              </div>
//        )
//    }
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    };

    const sumbitExerciseHandler = (e) => {
        e.preventDefault();
        setExercises([...Exercises,
            {text: inputText,completed : false, id: Math.random()*1000}]);
        setInputText("");
    };

   
    return(
        <form>
//                 <div><button onClick ={returnRandomFunction}
//                  className="random-exercise-button"> Start random exercise!</button></div>
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
        </form> 
    );
};

export default Form;