import React from "react";
import Exercise from "./ExerciseItem";

const ExerciseList = () => {
    return(
        <div className="exercise-container">
            <ul className="exercise-list">
                <Exercise />
            </ul>
        </div>
    );
};

export default ExerciseList;