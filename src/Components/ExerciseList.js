import React from "react";
import Exercise from "./ExerciseItem";
import { Container, Row } from "shards-react";

const ExerciseList = ( {choosenExercisesArray}) => {

    const exercisesDuration = () => {
        let count = 0;
        choosenExercisesArray.forEach((exercise) => {
            count+= (exercise.time + exercise.restTime) * exercise.repeats;
        })
        //consider removing one restTime from total count
        let displayCount = `${Math.trunc(count/60)}:${count%60} minutes`;
        return displayCount;
    }

    return(
        <Container>
            <Row className="py-4">
                <h1>Training List</h1>
            </Row>
            {choosenExercisesArray.map((exercise) => (
                <Exercise exercise={exercise} key={exercise.id} />
            ))}
            <Row>
                Current duration with rest breaks: <br />
                {exercisesDuration()}
                {/* Remaining time to total: */}
            </Row>
        </Container>
    );
};

export default ExerciseList;