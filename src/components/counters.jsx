import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
            myList:[{id:1,name:'iphone',q:10,color:'red'},
                    {id:2,name:'airPod',q:5,color:'yellow'},
                    {id:3,name:'TV',q:100,color:'pink'},
                    {id:4,name:'adaptor',q:5,color:'white'},
                    {id:5,name:'laptop',q:2,color:'black'},
                    {id:6,name:'watch',q:9,color:'black'},
                    {id:7,name:'ipad',q:8,color:'blue'},
                    ]
            }
            
handleDec=(c)=>{
    let pos=this.state.myList.indexOf(c)
    let first=this.state.myList.slice(0,pos)
    c.q=c.q-1
    let last=this.state.myList.slice(pos+1)
    let finalList=[...first,c,...last]
    this.setState({myList:finalList})
}
handleDel=(c)=>{
    let finalList=this.state.myList.filter(item=>item!=c)
    this.setState({myList:finalList})
}


handleInc=(c)=>{
    
    let pos=this.state.myList.indexOf(c)
    let first=this.state.myList.slice(0,pos)
    c.q=c.q+1
    let last=this.state.myList.slice(pos+1)
    let finalList=[...first,c,...last]
    this.setState({myList:finalList})

}
    render() {
        return (
        <div>
           {this.state.myList.map(item=><Counter 
                                        color={item.color} 
                                        id={item.id} 
                                        tedad={item.q} 
                                        title={item.name} 
                                        hinc={this.handleInc} 
                                        hdec={this.handleDec}
                                        hdel={this.handleDel}
                                        cntr={item}></Counter>)}  

        </div>
        );
    }
}

export default Counters;