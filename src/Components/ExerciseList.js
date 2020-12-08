import React from "react";
import Exercise from "./ExerciseItem";

const ExerciseList = ( {choosenExercisesArray}) => {

    const exercisesDuration = () => {
        let count = 0;
        Exercises.forEach((exercise) => {
            count+= (exercise.time + exercise.restTime) * exercise.repeats;
        })
        //consider removing one restTime from total count
        let displayCount = `${Math.trunc(count/60)}:${count%60} minutes`;
        return displayCount;
    }

    return(
        <div className="exercise-container">
            <ul className="exercise-list">
                <h1>Training List</h1>
                {choosenExercisesArray.map((exercise) => (
                    <Exercise exercise={exercise} key={exercise.id} />
                ))}
            </ul>
            <div className="time-summary">
                Current duration with rest breaks: <br />
                 {exercisesDuration()}
                {/* Remaining time to total: */}
            </div>
        </div>
    );
};

export default ExerciseList;