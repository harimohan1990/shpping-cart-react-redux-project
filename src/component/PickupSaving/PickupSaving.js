import React, { Component } from 'react';

import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSaving: {
        textDecoration: 'underline'
    },
    totalSaving: {
        color: 'red',
        fontWeight: 800
    }
}

class PickupSaving extends Component {
    render() {
        // <Tooltip id="tooltip">
        //     <p>Pickup your order in the store helps cut cost, and we pass the saving on you.</p>
        // </Tooltip>
        return (
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={Tooltip}>
                        <div style={styles.PickupSaving}>
                           
                        </div>
                    </OverlayTrigger>
                </Col>

                <Col style={styles.totalSaving} md={6}>
                    {`$${this.props.price}`}
                </Col>
            </Row>

        );
    }
}

export default PickupSaving;