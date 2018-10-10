import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Header is here..</p>
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired
};
