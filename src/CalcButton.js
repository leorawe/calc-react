import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: coral; 
  padding: 0.75rem 0.5rem; 
  border: solid 2px coral; 
  border-radius: 3px;
  margin: 0.5rem;
  font-size: 1rem;
  width: 50px;
  text-align: center;
`;

class CalcButton extends React.Component {
  
    //state = {selected: null};
    //onClick="this.setState.something"
    render(){
      return (
      <Button className={this.props.className}>{this.props.item} </Button>
      );
      }  
}

export default CalcButton;