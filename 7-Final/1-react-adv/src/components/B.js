import React, { Component } from 'react';
import C from './C';

class B extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    B Component <br />
                </pre>
                <C />
            </div>
        );
    }
}

export default B;