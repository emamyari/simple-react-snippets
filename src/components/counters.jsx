import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
            myList:[{id:1,name:'iphone',q:10},
                    {id:2,name:'airPod',q:5},
                    {id:3,name:'TV',q:100},
                    {id:4,name:'adaptor',q:5},
                    {id:5,name:'laptop',q:2},
                    ]
            }
    render() {
        return (
        <div>
          {this.state.myList.map(c=><div className='row'><Counter></Counter>{c.name}</div> )}  

        </div>
        );
    }
}

export default Counters;