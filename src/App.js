import React, {Component} from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Button from './Button/Button';

class App extends Component {

    render () {
        return (
        <div className="tausta">
            <Counter />            
            <Button />      
        </div>
       
        )
    }
    }




export default App;
