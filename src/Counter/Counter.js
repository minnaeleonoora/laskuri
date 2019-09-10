import React, {Component} from 'react';
import "./Counter.css";


class Counter extends Component {

    state = {
        counter: 0

    }

    addHandler = () => {
        this.setState( {
            counter:this.state.counter +1
        })
    }
    removeHandler = () => {
        if (this.state.counter > 0) {
        this.setState( {
            counter:this.state.counter -1
        })  
    }
    }
    resetHandler = () => {
        this.setState( {
            counter: 0
        })
    }

    render() {
        return (
            <div className="container">
                <div className={this.state.counter % 2 === 0 ? "circle even":"circle odd"}>
                    <p className="number">{this.state.counter}</p>
                </div>
                <div className="buttons">
                    <button onClick= {this.addHandler}>ADD ONE</button>
                    <button onClick= {this.removeHandler}>REMOVE ONE</button>
                    <button onClick= {this.resetHandler}>RESET</button>
                </div>
            </div>
        )
    }
}

export default Counter;