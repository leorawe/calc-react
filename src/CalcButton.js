import React from 'react';
//import ReactDOM from 'react-dom';

class CalcButton extends React.Component {
    //state = {selected: null};
    //onClick="this.setState.something"
    render(){
      return (
      <span className={this.props.className}>{this.props.item}</span>
      );
      }  
}

export default CalcButton;