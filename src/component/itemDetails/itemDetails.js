import React, { Component } from 'react';
import {Button, Collapse, Well, Media, Row, col} from 'react-bootstrap';



const bsStyle={

}
class itemDetails extends Component {
constructor(props){
    super(props);
    this.state={
        open:false
    }
    
}
    render() {
        return (
           <div>
            <Button classname="item.details.button"  bsStyle="link" 
            onClick={()=>{this.setState({open:!this.state.open})
            }} >
                {this.state.open===false ? "see item details":"hide items details "}
                {this.state.open===false ? "+":"-"}
            </Button>
            <Collapse in={this.state.open}>
                <div>
                    <well>
                        <media>
                             <img width={100} height={100} alt="thumnail" src="https://i5.walmartimages.com/asr/d7f485ef-982a-4258-95ff-558bef920db4_1.00243a59f629176ad3cde3a6fb3f5575.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"/>
                        </media>
                      
                    </well>
                </div>
            </Collapse>
           </div>
        );
    }
}

export default itemDetails;