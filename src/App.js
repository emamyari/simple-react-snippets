import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import Nav from './components/nav'
import React, { Component } from 'react';
import Table from './components/table';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class App extends Component {
  state = {
    myList: [],
    myAdd: [],
    options : { }
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


      fetch("http://192.168.1.41:7000/getaddress/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            myAdd: result
          });
        }
      )

      fetch("http://192.168.1.41:7000/getChartData/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            options: {'xAxis':{'categories':result.cat}
                     ,'series':{'colorByPoint': true,
                                'data':result.data}
                     ,'chart':{'type':'column'}
                     ,'plotOptions': {
                      'series': {
                          'color': 'green'
                      }
                  },
                    }
          });
          console.log(result)
        }
      )



  }
  render() {
    return (
      <div className='m-2'>
        <Nav tedad={this.state.myList.length}></Nav>
       
        <div className=' row'>
          
         <div className='col-md-12'>
          <Counters 
            handleDel={this.handleDel}
            handleInc={this.handleInc}
            handleDec={this.handleDec}
            counters={this.state.myList}
          ></Counters>
          </div>

          <div className='col-md-12'>
        <HighchartsReact highcharts={Highcharts} options={this.state.options} />
        </div>

        </div>
        <Table size='col-md-12' info={this.state.myList}></Table>
      </div>
    );
  }
}

export default App;