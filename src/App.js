import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import Nav from './components/nav'
import React, { Component } from 'react';

class App extends Component {
  state = {
    myList: [{ id: 1, name: 'iphone', q: 10, color: 'red' },
    { id: 2, name: 'airPod', q: 5, color: 'yellow' },
    { id: 3, name: 'TV', q: 100, color: 'pink' },
    { id: 4, name: 'adaptor', q: 5, color: 'white' },
    { id: 5, name: 'laptop', q: 2, color: 'black' },
    { id: 6, name: 'watch', q: 9, color: 'black' },
    { id: 7, name: 'ipad', q: 8, color: 'blue' },
    ]
  }

  handleDec = (c) => {
    let pos = this.state.myList.indexOf(c)
    let first = this.state.myList.slice(0, pos)
    c.q = c.q<1? c.q:  c.q - 1
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
  render() {
    return (
      <div>
        <Nav tedad={this.state.myList.length}></Nav>
        <Counters 
          handleDel={this.handleDel}
          handleInc={this.handleInc}
          handleDec={this.handleDec}
          counters={this.state.myList}
        ></Counters>
      </div>
    );
  }
}

export default App;