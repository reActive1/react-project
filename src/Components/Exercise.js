import React from 'react';
import  {Exercises}  from "../Common/Enums"

export class Exercise extends React.Component {

    getRandomExercise(Stock) {
        var arr =[]
        for (const [key, value] of Object.entries(Stock)) {
        arr.push(key)
        }
        var ind = this.generateNumber(0, arr.length);
        return Stock[arr[ind]];
    }

    generateNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    render(){
        return <div><button onClick = {(e) => {e.preventDefault(); this.getRandomExercise(Exercises);}}>Start random exercise!</button></div>
    }
}

