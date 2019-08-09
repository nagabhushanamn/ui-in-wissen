import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext'

class A extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    A Component <br /> <br />
                    {this.props.color}
                </pre>
                <ColorContext.Provider value={this.props.color}>
                    <B />
                </ColorContext.Provider>
            </div>
        );
    }
}

export default A;