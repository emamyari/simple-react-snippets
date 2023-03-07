import React, { Component } from 'react';

class Table extends Component {
    state = {}
    render() {
        return (<div className={this.props.size}>
            <table class="table-dark  table-striped col-md-12">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Color</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.info.map(item =>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.color}</td>
                        <td>{item.q}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>);
    }
}

export default Table;