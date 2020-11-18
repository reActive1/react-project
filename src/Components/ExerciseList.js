import React from "react";
import Exercise from "./ExerciseItem";

const ExerciseList = ( {Exercises,setExercises}) => {
    return(
        <div className="exercise-container">
            <ul className="exercise-list">
                {Exercises.map((todo) => (
                    <Exercise  todo={todo} Exercises={Exercises} setExercises={setExercises} text={todo.text} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default ExerciseList;