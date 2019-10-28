import React, { Component } from 'react';
import {Row ,Col} from 'react-bootstrap';


class SubTotal extends Component {
    render() {
        return (
            <div className="show-grid">
                <Col md={6}>SubTotal </Col>
                <Col md={6}>{`$${this.props.price}`}</Col>
            </div>
        );
    }
}

export default SubTotal;