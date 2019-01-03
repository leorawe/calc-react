import React from 'react';
import styled from 'styled-components';

const CalcScreen = styled.div`
   background: #708090;
   border-radius: 10px;
   box-shadow: inset 0 4px 5px #000000;
   color: #eff1e4;
   flex: 3;
   font-size: 28px;
   height: 10px;
   margin: 5px;
   padding: 20px 10px;
   text-align: right;
   line-height: 12px;
`;

const Screen = (props) => {
   // console.log({props});
      return (
      <CalcScreen> {props.result}</CalcScreen>
      );
};

export default Screen;