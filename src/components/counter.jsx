import React, { Component } from 'react';

class Counter extends Component {
    state = { count:this.props.tedad } 

    handleDec=()=>{
        let a=this.state.count-1
        a<0?a++:a=a
        this.setState({count:a})
    }

    handleInc=()=>{
        let a=this.state.count+1
        a>10?a--:a=a
        this.setState({count:a})
    }


    render() { 
        let myClass=''
        this.state.count===0?myClass='bg-danger col-md-1 btn ': myClass='bg-light col-md-1 btn '
        let myClass2=''
        let col=this.props.color
        this.state.count===0?myClass2='  col-md-1 btn '+ col: myClass2=' col-md-1 btn '+col
        
        return (<div>


                    <span className={myClass}> {this.props.id}    </span>
                    <button onClick={this.handleInc} className='btn btn-success m-2'>افزایش</button>
                    <span className={myClass}>{this.state.count}</span>
                    <button onClick={this.handleDec} className='btn btn-warning' >کاهش</button>
                    <button className='btn btn-danger'>حذف</button>
                    <span className={myClass}> {this.props.title}    </span>
                    <span className={myClass2} > {this.props.color}    </span>

                </div>);
    }
}
 
export default Counter;