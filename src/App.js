import React from 'react';
import Screen from './Screen';
import ButtonAdder from './ButtonAdder';
import CalcButton from './CalcButton';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #537c8e;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
`;  
const Calc = styled.div`
    width: 265px;
    display: flex;
    flex-direction: column;
    background: #85583f;
    border-radius: 5px;
    padding-bottom: 10px;
    box-shadow: 0 4px 1px #1F0000;
    `;
const Top = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    `;   
//change to class and add state
class App extends React.Component{
   state = {recent: 0};
   // set a callback here - onResultChange
   onResultChange = (newVal) => {
     //  console.log(someArg);
     this.setState(() => ({recent: newVal}));
     //also, do some calculation then add this to state
   };

   onScreen =  () => {
       //this should be the calculated result instead of recent
       let val = this.state.recent;
      switch(val){
         case 'C':
            return '0';
         default:
            return val;   
      }
   }

    render (){
      return(  
      <Wrapper>
         <Calc>
            <Top>
                    <CalcButton 
                    item = "C"
                    className = "clear"
                    key = "c"
                    buttonBack = "#ceae7f"
                    onResultChange = {this.onResultChange}
                    /><Screen 
                    result={this.onScreen()} />
             </Top>    
             <ButtonAdder 
             onResultChange = {this.onResultChange}
              />
        </Calc>
    </Wrapper>   
      );
    }
}

export default App;