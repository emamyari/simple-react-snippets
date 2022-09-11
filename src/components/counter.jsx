import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:100,
        names:['ali reza','reza','mohammad']
    } 
    handleInc =() =>{
        this.setState({count: this.state.count+1})
    }
    render() { 
        let myClass="badge m-2 badge-"
        myClass=myClass+(this.state.count>0?'warning':'primary');
        return (
            <div>
                <button className='btn btn-warning'>Decrement</button>
                <span className={myClass}>{this.countText()}</span>
                <button onClick={this.handleInc} className='btn btn-success'>Increment</button>
                <button className='btn btn-danger'>Delete</button>
                {/* {this.state.names.map(o =><li key={o}> {o}</li>)} */}
            </div>
         );
    }
    countText(){
        return this.state.count===0 ? 'zero' : this.state.count
    }
}
 
export default Counter;