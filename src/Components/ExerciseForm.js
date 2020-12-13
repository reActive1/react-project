import React, { useState } from 'react';
import {Exercises} from "../Common/Enums";
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Label, Form ,Input } from 'semantic-ui-react';
import { getRandomExercise } from './RandomExercise';
import { timeOptions }  from "../Common/Enums";
import ExerciseList from './ExerciseList';
import { Container, Row, Col } from "shards-react";


class ExerciseForm extends React.Component {
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
        choosenExercisesArray:[],
        selectedRandom:"",
        name: "",
        time: "",
        repeats: 1,
        restTime: 10,
        id: 1,
      };

      this.randomFunctionHandler = this.randomFunctionHandler.bind(this);


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
  console.log(getRandomExercise(getRandomExercise(Exercises)));
  let x= getRandomExercise(getRandomExercise(Exercises))
  this.setState({name:  x})
//     // <div>
  
      
//     // </div>
// )
//  })
// })
 
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
    let array = this.state.choosenExercisesArray;
    let id = this.state.id;
    let obj = { name: this.state.name, time: this.state.time, repeats: this.state.repeats, restTime: this.state.restTime, id:id };
    array.push(obj);
    id ++;
  
    this.setState({id:id, choosenExercisesArray: array});

}

  
  render() {
      let {choosenExercisesArray} = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <Row className="page-header py-4 my-4">
          <Col><h1> Hi you! choose your exercise:  </h1></Col>
        </Row>
         
        <Row>
          <Col>
            <form>
              <div>
                <div>
                  <button onClick={this.randomFunctionHandler} className="random-exercise-button"> Start random exercise!</button>
                </div>
                <Label pointing='right'>Select exrecise type</Label>
                <Dropdown
                  placeholder='Select exrecise type'
                  fluid
                  selection
                  onChange={(event, data) => {
                    console.log(data.value);
                    {this.filterExercise(data)}
                  }}
                  options={this.state.Types_of_exercises}
                />
                <Form.Field>
                  <Label pointing='right'>Select exrecise</Label>
                  <Dropdown
                    placeholder='Select exrecise'
                    fluid
                    search
                    selection
                    onChange={(event,data)=>{
                      this.setState({name: data.value})
                    }}
                    options={this.state.current_exercise}
                  />
                </Form.Field>
                <Label pointing='right'>Select time</Label>
                <Dropdown
                  placeholder='Select time'
                  fluid
                  search
                  selection
                  onChange={(event,data)=>{
                    this.setState({time:data.value})
                  }}
                  options={timeOptions}
                />
                <Label pointing='right'>Select repeats</Label>
                <Input 
                  placeholder='repeats'
                  type="number"
                  onChange={(event,data)=>{
                    this.setState({repeats:data.value})
                  }}
                />
                <button onClick={this.sumbitExerciseHandler} className="exercise-button" type="submit">
                  <i className="fas fa-plus-square"></i>
                </button>         
              </div>
              {/* {selectedRandom} */}
            </form> 
          </Col>
          <Col>
            <ExerciseList choosenExercisesArray={choosenExercisesArray}/>
          </Col>
        </Row>
     </Container>
    );
  }
}

export default ExerciseForm;