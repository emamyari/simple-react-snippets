import React, { Component } from 'react';

class Nav extends Component {
    state = {  } 
    render() { 
        return (

            <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" >count: {this.props.tedad}</a>
            </nav>

        );
    }
}
 
export default Nav;