import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import Nav from './components/nav'
import React, { Component } from 'react';
import Table from './components/table';

class App extends Component {
  state = {
    myList: []
  }

  handleDec = (c) => {
    let pos = this.state.myList.indexOf(c)
    let first = this.state.myList.slice(0, pos)
    c.q = c.q < 1 ? c.q : c.q - 1
    let last = this.state.myList.slice(pos + 1)
    let finalList = [...first, c, ...last]
    this.setState({ myList: finalList })
  }
  handleDel = (c) => {
    let finalList = this.state.myList.filter(item => item != c)
    this.setState({ myList: finalList })
  }
  handleInc = (c) => {

    let pos = this.state.myList.indexOf(c)
    let first = this.state.myList.slice(0, pos)
    c.q = c.q + 1
    let last = this.state.myList.slice(pos + 1)
    let finalList = [...first, c, ...last]
    this.setState({ myList: finalList })

  }
  componentDidMount() {
    fetch("http://192.168.1.41:7000/getdata/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            myList: result
          });
        }
      )



  }
  render() {
    console.log('render')
    return (
      <div className='m-2'>
        <Nav tedad={this.state.myList.length}></Nav>

        <div className=' row'>
          <Counters 
            handleDel={this.handleDel}
            handleInc={this.handleInc}
            handleDec={this.handleDec}
            counters={this.state.myList}
          ></Counters>
        <Table size='col-md-6'  info={this.state.myList}></Table>

        </div>
        <Table size='col-md-12' info={this.state.myList}></Table>
      </div>
    );
  }
}

export default App;