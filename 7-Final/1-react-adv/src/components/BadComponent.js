
import React, { Component } from 'react';

class BadComponent extends Component {
    componentDidMount() {
        //throw new Error('im bad')
    }
    render() {
        return (
            <div className="card card-body">
                Bad Component
            </div>
        );
    }
}

export default BadComponent;