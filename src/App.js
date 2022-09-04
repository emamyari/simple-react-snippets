import React, { Component } from 'react';
import Counter from './components/counter'
import Menu from './components/menu';
class App extends Component {
  state = {  } 
  render() { 
    return (<div>     
              <Menu></Menu>
             
              <Counter></Counter>
             </div>);
  }
}
 
export default App;