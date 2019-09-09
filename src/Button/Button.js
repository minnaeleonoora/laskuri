import React, {Component} from 'react';
import "./Button.css";

class Button extends Component {

    state = {
        number: 0,
    }

    increaseNumber = () => {
        this.setState( {
            count:this.state.count+1
        }
     )
    }

    decreaseNumber = () => {
        this.setState( {
            count:this.state.count-1
        }
     )
    }
    resetNumber = () => {
        this.setState( {
            count:this.state.count+1
        }
     )
    }

    render () {
        return (
        <div className="button">
        <button onClick={this.state.increaseNumber}>Add one</button>   
        <button onClick={this.state.decreaseNumber}>Minus one</button>        
        <button onClick={this.state.resetNumber}>Reset number</button>        
        </div>
        )
    }
}

export default Button;