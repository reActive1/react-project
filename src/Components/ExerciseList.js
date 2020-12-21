import React from "react";
import Exercise from "./ExerciseItem";
import { Container, Row, Button } from "shards-react";
import {NavLink} from 'react-router-dom';
import { Label } from 'semantic-ui-react';

const ExerciseList = ( {choosenExercisesArray, updateExercisesArray, totalTrainingTime}) => {

    const exercisesDurationInSec = () => {
        let count = 0;
        choosenExercisesArray.forEach((exercise) => {
            count+= (exercise.time + exercise.restTime) * exercise.repeats;
        })
        return count;
    }
    
    const convertAndDisplaySec = (timeInSec) => {
        let secDisplay = timeInSec % 60 === 0 ? "00" : timeInSec % 60;
        let minDisplay = Math.trunc(timeInSec/60) === 0 ? "00" : Math.trunc(timeInSec/60);
        let displayCount = `${minDisplay}:${secDisplay} minutes`;
        return displayCount;
    }

    //consider removing one restTime from total count
    //option to add a message of what diff in min:sec exists
    const isExercisesDurationFitTotalTime = () => {
        const expectedDiff = 0.05;
        const actualDiff = totalTrainingTimeInSec - totalExerciseDuration;
        return {
                 isDurationFitTime: Math.abs(actualDiff) <= totalTrainingTimeInSec * expectedDiff,
                 diff: actualDiff
                };
    }


    const totalTrainingTimeInSec = totalTrainingTime / 1000;
    const totalExerciseDuration = exercisesDurationInSec();
    const {isDurationFitTime, diff} = isExercisesDurationFitTotalTime();

    return(
        <Container>
            <Row className="py-4">
                <h1>Training List</h1>
            </Row>
            {choosenExercisesArray.map((exercise) => (
                <Exercise 
                    exercise={exercise} 
                    choosenExercisesArray={choosenExercisesArray} 
                    updateExercisesArray={updateExercisesArray}
                    key={exercise.id} />
            ))}
            <Row>
                <h6>Current duration with rest breaks: <br /> 
                <strong>{convertAndDisplaySec(totalExerciseDuration)}</strong></h6>
                {/* Option to display - Remaining time to total: */}
            </Row>
            <Row className="mt-3">
            <NavLink to = {{ pathname: `/Timer/` }}>
                  <Button pill theme="info" size="lg" disabled={!isDurationFitTime}>START TRAINING</Button>
                 {!isDurationFitTime && <Label basic color='red' pointing='left'>{convertAndDisplaySec(diff)} left, don't be lazy ;)</Label>}
            </NavLink>
                
            </Row>
        </Container>
    );
};

export default ExerciseList;