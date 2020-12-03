import React from 'react';




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
           
            
        </div>

    );
};


export default ExerciseItem;