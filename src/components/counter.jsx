import React, { Component } from 'react';

class Counter extends Component {
    state = {} 



    render() { 
        let myClass=''
        this.state.count===0?myClass='bg-danger col-md-1 btn ': myClass='bg-light col-md-1 btn '
        let myClass2=''
        let col=this.props.color
        this.state.count===0?myClass2='  col-md-1 btn '+ col: myClass2=' col-md-1 btn '+col
        
        return (<div>


                    <span className={myClass}> {this.props.id}    </span>
                    <button onClick={()=>this.props.hinc(this.props.cntr)} className='btn btn-success m-2'>افزایش</button>
                    <span className={myClass}>{this.props.tedad}</span>
                    <button onClick={()=>this.props.hdec(this.props.cntr)} className='btn btn-warning' >کاهش</button>
                    <button onClick={()=>this.props.hdel(this.props.cntr)} className='btn btn-danger'>حذف</button>
                    <span className={myClass}> {this.props.title}    </span>
                    <span className={myClass2} > {this.props.color}    </span>

                </div>);
    }
}
 
export default Counter;