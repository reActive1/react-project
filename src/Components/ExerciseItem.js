import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import  {timeOptions}  from "../Common/Enums"



const ExerciseItem = ({text,todo,Exercises,setExercises}) => {

      
const deleteHandler = () => {
    setExercises(Exercises.filter((el) => el.id !== todo.id));        
};
const completeHandler = () => {
    setExercises(Exercises.map(item => {
        if(item.id === todo.id){
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
    }));
}


    return(

        <div className="Exercise">
            <il className="Exercise-item">{text}</il>
            <button onClick={completeHandler} className="complete-btn" >
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <Dropdown
              placeholder='Select time'
              fluid
              selection
              options={timeOptions}
                />
            <Dropdown
              placeholder='Select repeats'
              fluid
              selection
              options={timeOptions}
                />
            
        </div>

    );
};


export default ExerciseItem;