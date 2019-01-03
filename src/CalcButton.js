import React from 'react';
import styled from 'styled-components';

//#52250;
//background: #2ebdbd;

const Button = styled.button`
  color: #eff1e4; 
  padding: 0.75rem 0; 
  border: solid 2px #eff1e4; 
  background-color: ${props => props.buttonBack || '#2ebdbd'};
  box-shadow: 0 4px 1px #1F0000;
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
      <Button className={this.props.className} buttonBack={this.props.buttonBack}>{this.props.item} </Button>
      );
      }  
}

export default CalcButton;