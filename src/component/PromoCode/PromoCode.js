import React, { Component } from 'react';

import {Button,Collapse,Well,Form,Row,Col,FormGroup,div,FormControl
}                                       from 'react-bootstrap'

import {connect} from 'react-redux';
import {handleChange} from '../../component/actions/PromoCodeAction';

class PromoCode extends Component {

    constructor(props){
        super(props);
        this.state={
            open:false
   

        }

        handleChange=e=>{
            this.props.handleChange(e);
        }
    }
    render() {
        return (
            <div className="promo-code-button">

               <Button classname="item.details.button"  bsStyle="link" 
            onClick={()=>{this.setState({open:!this.state.open})

            }} >


            {this.state.open ===false ?`Apply` :`hide`}
            promocode
            {this.state.open===false?`+`:`-`}
            </Button>
          
            <div in={this.state.open}></div>
            <div>
                <Row classname="show-grid">
                  <Col md={12}></Col>
                  <Form>
                      <FormGroup  controlId="FormInLineName"> </FormGroup>
                      <div>Promocode</div>
                      <FormControl  type="text" placehoder="prome code here" onChange={this.handleChange}>

                      </FormControl>
                      <Button  block bsStyle="sucess" className="btn-round" disabled={this.props.isDisabled} onClick={this.props.giveDiscount}>Apply</Button>
                  </Form>
                </Row>
            </div>
            </div>

            
        );
    }
}


const mapStateToPrpos = state=>({
    promoCode :state.promoCode.value
})
export default connect(mapStateToPrpos, {handleChange})(PromoCode) ;