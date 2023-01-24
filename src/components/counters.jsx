import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
            myList:[{id:1,name:'iphone',q:10,color:'red'},
                    {id:2,name:'airPod',q:5,color:'yellow'},
                    {id:3,name:'TV',q:100,color:'pink'},
                    {id:4,name:'adaptor',q:5,color:'white'},
                    {id:5,name:'laptop',q:2,color:'black'},
                    {id:5,name:'watch',q:9,color:'black'},
                    {id:5,name:'ipad',q:8,color:'blue'},
                    ]
            }
    render() {
        return (
        <div>
           {this.state.myList.map(item=><Counter color={item.color} id={item.id} tedad={item.q} title={item.name}></Counter>)}  

        </div>
        );
    }
}

export default Counters;