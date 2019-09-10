import React from 'react';
import './App.css';
import Counter from './Counter/Counter';
import CounterHook from './CounterHook/CounterHook';


const App = () => {
    return (
        <div className="app">
            <Counter /> 
            <CounterHook />              
        </div>
       
        )
}

export default App;
