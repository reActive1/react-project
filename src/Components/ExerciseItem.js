import React from 'react';
import { Row, Col } from "shards-react";


const ExerciseItem = ({exercise,key}) => {
      
const deleteHandler = () => {
    // setExercises(Exercises.filter((el) => el.id !== exercise.id));        
};

    return(
        <Row>
            <Col xs="1">
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </Col>
            <Col xs="11">
                <h3><span className="repeats">{exercise.repeats} x </span> {exercise.name}</h3> Duration per set: {exercise.time}  
            </Col>
        </Row>
    );
};


export default ExerciseItem;