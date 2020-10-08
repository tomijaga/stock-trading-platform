import React from 'react';

export default class DateComponent extends React.Component{


  constructor(){
    super();
  }

  getDate=()=>{
    return ` ${new Date().toLocalDateString().substring(10,4)}`;
  }

  render(){
    return (
        <span>
          {this.getDate()}
        </span>
    )
  }
}