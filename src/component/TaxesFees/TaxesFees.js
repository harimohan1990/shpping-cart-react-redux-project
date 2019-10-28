import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class TaxesFees extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={6}> Est. taxes & fees(based  on 94123)</Col>
                <Col md={6}> {`$${this.props.price}`}   </Col>

            </Row>
                
        );
    }
}

export default TaxesFees;