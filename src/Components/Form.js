import React from 'react';
const Form = ({setInputText,Exercises, setExercises,inputText}) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const sumbitExerciseHandler = (e) => {
        e.preventDefault();
        setExercises([...Exercises,
            {text: inputText,completed : false, id: Math.random()*1000}]);
        setInputText("");
    };
    
    return(
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="exercise-input" 
            />
            <button onClick={sumbitExerciseHandler} className="exercise-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="exercises" className="filter-exercises">
                    <option value="all">All</option>
                    <option value="Hands exercises">Hands exercises</option>
                    <option value="Legs exercises">Legs exercises</option>
                    <option value="Abs exercises">Abs exercises</option>
                    <option value="Butt exercises">Butt exercises</option>
                </select>
            </div>
        </form> 
    );
};

export default Form;