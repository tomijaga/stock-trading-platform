import React, {Component} from 'react';
import './MenuItem.css';

class MenuItem extends Component{
    super(){

    }


  render(){
      return(
        <div className ="MenuItem">
            <p className ="symbol"> {this.props.symbol}</p>
          <p className ="name"> {this.props.name}</p>
        </div>
      );
  }
}

export default MenuItem;