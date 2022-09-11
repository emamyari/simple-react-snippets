import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0
    } 

    render() { 
        let myClass="badge m-2 badge-"
        myClass=myClass+(this.state.count>0?'warning':'primary');
        return (
            <div>
                <button className='btn btn-warning'>Decrement</button>
                <span className={myClass}>{this.countText()}</span>
                <button className='btn btn-success'>Increment</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
         );
    }
    countText(){
        return this.state.count===0 ? 'zero' : this.state.count
    }
}
 
export default Counter;