import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        return (
        <div>
           {this.props.counters.map(item=><Counter 
                                        color={item.color} 
                                        id={item.id} 
                                        tedad={item.q} 
                                        title={item.name} 
                                        hinc={this.props.handleInc} 
                                        hdec={this.props.handleDec}
                                        hdel={this.props.handleDel}
                                        cntr={item}></Counter>)}  

        </div>
        );
    }
}

export default Counters;