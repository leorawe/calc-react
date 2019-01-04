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
   state = {
       recent: 0,
       calculation: 0,
       operator: null,
       finalcalc: 0
    };

   // set a callback here - onResultChange
   onResultChange = (newVal) => {
     this.setState(() => ({recent: newVal}));  
     this.doCalculation(newVal);
     
     //console.log(this.state.recent);
     //also, do some calculation then add this to state
   };

   doCalculation = (arg) =>{
    let recent = this.state.recent;
    let calculated =  this.state.calculation;
    let regex = /^\d+$/;
    let regdecimal = /^\.$/;
    let yesNumRecent = (regex.test(recent));
    let yesDecimal = (regdecimal.test(recent));
    switch(arg){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            //if recent is a number or a decimal
            
            //if number
            if(yesNumRecent){
                console.log('two together: ',recent.toString() + arg.toString());
                console.log('current calc', calculated);
                console.log('current recent', this.state.recent);
               let newCalc = parseFloat(calculated + arg.toString());
               this.setState(() => ({calculation: newCalc}));
            }
            else if(yesDecimal){
                //console.log('with dec', calculated + '.'+ arg.toString());
                let newDec = parseFloat(calculated + '.'+ arg.toString());
                this.setState(() => ({calculation: newDec}));
            }
            else
            {
                 console.log('arg ', arg, ' recent ', recent);
                 this.setState(() => ({calculation: arg}));
                 console.log('calc is ', this.state.calculation)
            }
            break;  
      case 'C':
          this.setState(() => ({calculation: 0}));
          this.setState(() => ({finalcalc: 0}));
          this.setState(() => ({operator: null}));
          this.setState(() => ({recent: 0}));
          break;
      case '.':
            //if number
            if(yesNumRecent){
                console.log('decimal added: ',recent.toString() + arg);
                let newDec = parseFloat(calculated + arg);
                this.setState(() => ({calculation: newDec}));
            }
            break;
      case '+':
      case '-':
      case '*':
      case '/':
          this.setState(() => ({operator: arg}));
         // console.log('what is this - op???', this.state.operator);
        //  console.log(this.state.calculation);
         if(this.state.finalcalc===0)
            {this.setState(() => ({finalcalc: calculated}));}
          break;
      case '=':
            //do operations here
           let operated = this.doOperation(this.state.operator, recent, this.state.finalcalc);
          // console.log(operated);   
           this.setState({finalcalc: operated});   
           //console.log('here', this.state.finalcalc);   
          // console.log(operated);  
          break;
      default:
          break;
   }
 }

   onScreen =  () => {
       //this should be the calculated result instead of recent
       let val = this.state.finalcalc;
       let val2 = this.state.calculation;
       let recent = this.state.recent;
      switch(recent){
         case 'C':
            return '0';
      case '+':
      case '-':
      case '*':
      case '/':
            console.log('interim', this.state.calculation);
            console.log('final', this.state.finalcalc);
            return val2;  
         case '=':
            return val;    
         default:
            return val2;   
      }
   }

   doOperation = (op,rec, calcu) => {
       switch(op) {
           case '+':
               console.log('recent', parseFloat(rec));
              console.log('calculation foo', parseFloat(calcu));
              return (parseFloat(calcu) + parseFloat(rec));
           case '-':
             return (parseFloat(calcu) - parseFloat(rec));
          case '*':
             return (parseFloat(rec) * parseFloat(calcu));  
          case '/':
             return (parseFloat(calcu) / parseFloat(rec));
          default:
             console.log('huh?');
             return 0; 
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