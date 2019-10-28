import React,{Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import SubTotal from './component/SubTotal/SubTotal';

import PickUpsaving from './component/PickupSaving/PickupSaving';

import TaxesFees from './component/TaxesFees/TaxesFees';

import EstimatedTotal from './component/EstimatedTotal/EstimatedTotal';

import  ItemDetails from './component/itemDetails/itemDetails';

import PromoCode from './component/PromoCode/PromoCode';

import {connect } from 'react-redux';

import {handleChange} from './component/actions/PromoCodeAction'

class App extends Component{
constructor(props){
  super(props);
  
  this.state={
    total:100,
    Taxes :25,
    PickUpsaving : -3.85,
    Estimated :0,
    DisablePromoButton : false,


     
  }
}
 componentDidMount=()=>{
this.setState({
  taxes: (this.state.total + this.state.PickUpsaving) * 0.87
} , function(){
  this.setState({
    EstimatedTotal: this.state.total + this.state.PickUpsaving + this.state.TaxesFees
  })
})
 }
render(){
  return (
    <div className="container">
      <Container className="purchase-card">
        <h6>Hello Grid</h6>
        <SubTotal price={this.state.total.toFixed(2)}/>
        <PickUpsaving price={this.state.PickUpsaving}/>
        <TaxesFees price ={this.state.Taxes.toFixed(2)}/>
        <hr/>
        <EstimatedTotal price ={this.state.Estimated.toFixed(2)}/>
        <ItemDetails/>
        
      </Container>
      <PromoCode   giveDiscount ={()=>this.giveDiscountHandler}   isDisabled={this.state.DisablePromoButton}/>
    </div>
  );

}


  
}

const mapStateToProps  = state =>({
  promoCode : state.PromoCode.value
})
   


export default connect(mapStateToProps,{handleChange})(App);
