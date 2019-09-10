import React, { useState } from 'react';
import './CounterHook.css';

const CounterHook = () => {
const [counter, setCounter] = useState(1000);

const addHandler = () => {
    setCounter(counter+1);
}
const removeHandler = () => {
    counter <= 1000 ? setCounter(1000): setCounter(counter -1);
}
const resetHandler = () => {
    setCounter(0);
}


    return (
        <div className="container">
        <div className="buttons">
        <p className="circle">{counter}</p>
        <button onClick={addHandler}>ADD ONE</button>
        <button onClick={removeHandler}>REMOVE ONE</button>
        <button onClick={resetHandler}>RESET</button>
        </div>
        </div>
    );
}

export default CounterHook;