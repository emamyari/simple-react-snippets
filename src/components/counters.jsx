import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    state = { counters:[
        {id:1,value:2},
        {id:2,value:2},
        {id:3,value:2},
        {id:4,value:2},
    ] } 
    render() { 
        return (<div>
           
            {this.state.counters.map(c=><Counter></Counter>)}
</div>
        );
    }
}
 
export default Counters;