import React, { Component } from 'react';

class Counter extends Component {
    state = { count:100 } 

    render() { 
        return (
            <div>
                <span>{this.countText()}</span>
                <button>Increment</button>
            </div>
         );
    }
    countText(){
        return this.state.count===0 ? 'zero' : this.state.count
    }
}
 
export default Counter;