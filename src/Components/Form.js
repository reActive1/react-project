import React, { useState } from 'react';
import {Exercises} from "../Common/Enums";
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react'
import {getRandomExercise} from './RandomExercise'
import  {timeOptions}  from "../Common/Enums"
import  {timeRepeat}  from "../Common/Enums"


class Form extends React.Component {
  constructor(props) {
    super(props);
    
    var ex = Object.keys(Exercises).map((key)=>{
        var obj = {};
        obj[key] = Exercises[key];
        
        return obj;
        
            });          
    var res = [];
    for (var i in ex){
        for (var key in ex[i])
        {
            Object.keys(ex[i][key]).forEach(item =>{
                res.push({
                    key: item,
                    text: item,
                    value: item
                });
            }) 
        }
    }



    var Types_of_exercises = [{
        key: 'Back exercises',
        text: 'Back exercises',
        value: 'Back exercises',
      },
      {
        key: 'Legs exercises',
        text: 'Legs exercises',
        value: 'Legs exercises',
      },
      {
        key: 'Abs exercisesbs',
        text: 'Abs exercisesbs',
        value: 'Abs exercisesbs',
      },{
        key: 'Shoulders exercises',
        text: 'Shoulders exercises',
        value: 'Shoulders exercises',
      },
      {
        key: 'FullBody exercises',
        text: 'FullBody exercises',
        value: 'FullBody exercises',
      },]
      var myArray = {"Total":10,"Back exercises": 0, "Legs exercises": 1, "Abs exercisesbs": 3,"Shoulders exercises": 4,"FullBody exercises": 5, "Chest exercises":6};
      this.state = {
        current_exercise: res ,
        current_exercises_key: ex ,
        myArray: myArray,
        Types_of_exercises:Types_of_exercises,
        exercise_item : [],
        choosen_exercises_array:[],
        selectedRandom:"",
      };


  }

//   const randomFunctionHandler = (e) => {
//     e.preventDefault();
//   /* First way to show*/
//   //  setRandomExercise(selectedRandom = getRandomExercise(getRandomExercise(E1))); 
//     setRandomExercise(selectedRandom = () => {
//         return(
//             <div>
//                 {getRandomExercise(getRandomExercise(E1))}
//             </div>
//         )
//     });
// }

handleRand = () =>{
  return(
            <div>
                {getRandomExercise(getRandomExercise(Exercises))}
            </div>
        )
}

  randomFunctionHandler = (e) => {
    e.preventDefault();
  /* First way to show*/
  //  setRandomExercise(selectedRandom = getRandomExercise(getRandomExercise(E1))); 
  // this.setState({selectedRandom:  {getRandomExercise(getRandomExercise(Exercises))} })
  //   var rand_val = () => {return(
  //   <div>
  //     {getRandomExercise(getRandomExercise(Exercises))}
  //   </div>
  // );}
  
  // this.setState({selectedRandom: {this.handleRand} })
  this.setState({selectedRandom:   ( () => {return(
    <div>
        {getRandomExercise(getRandomExercise(Exercises))}
    </div>
)
 })
})
 
    // setRandomExercise(selectedRandom = () => {
    //     return(
    //         <div>
    //             {getRandomExercise(getRandomExercise(Exercises))}
    //         </div>
    //     )
    // });
}
  
  filterExercise = (e,data) =>{
    console.log(e.value);
    var current_dropdown=[];
    for (var key in this.state.current_exercises_key[this.state.myArray[e.value]])
    {
        Object.keys(this.state.current_exercises_key[this.state.myArray[e.value]][key]).forEach(item =>{
          current_dropdown.push({
                key: item,
                text: item,
                value: item
            });
        }) 
    }
    this.setState({current_exercise:current_dropdown})
  }

  sumbitExerciseHandler = (e) => {
    e.preventDefault();
    this.state.choosen_exercises_array.push(this.state.exercise_item)
    // console.log(this.state.choosen_exercises_array)
    // this.props.setInputText(this.state.exercise_item)
    
  
}

  
  render() {
    return (
        <form>
        <div>
            <div><button onClick={this.randomFunctionHandler} className="random-exercise-button"> Start random exercise!</button></div>

            <Dropdown
              placeholder='Select exrecise type'
              fluid
              selection
              onChange={(event, data) => {
                console.log(data.value);
                {this.filterExercise(data)}
            }
          }
              options={this.state.Types_of_exercises}
                />

              <Dropdown
              placeholder='Select exrecise'
              fluid
              search
              selection
              onChange={(event,data)=>{
                this.state.exercise_item.push({exrecise:data.value})
              }}
              options={this.state.current_exercise}
                />
                <Dropdown
              placeholder='Select time'
              fluid
              search
              selection
              onChange={(event,data)=>{
                this.state.exercise_item.push({time:data.value})
              }}
              options={timeOptions}
                />
            <Dropdown
              placeholder='Select repeats'
              fluid
              search
              selection
              onChange={(event,data)=>{
                this.state.exercise_item.push({repeats:data.value})
              }}
              options={timeOptions}
                />

                <button onClick={this.sumbitExerciseHandler} className="exercise-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>         
            </div>
            {/* {selectedRandom} */}
         </form> 

    );
  }
}

export default Form;