import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:100
        ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Mjy28BAY3wLMhv_dzRJx-dTB1rDk8d6Tf8SQ6N86hCZHXXK4ywkQsMvHQyclEv5rdjA&usqp=CAU'
    } 

    render() { 
        return (
            <div>
                <img src={this.state.img} alt="" />
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