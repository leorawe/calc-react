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
       finalcalc: []
    };

    addCalculation(newCalc) {
        this.setState({ finalcalc: [...this.state.finalcalc, newCalc]})
      }

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
    let op = this.state.operator;
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
            
            if(yesDecimal)
                {
                //console.log('with dec', calculated + '.'+ arg.toString());
                let newDec = parseFloat(calculated + '.'+ arg.toString());
                this.setState(() => ({calculation: newDec}));
                }
             else if(yesNumRecent)
              {
  //            console.log('two together: ',recent.toString() + arg.toString());
           //     console.log('current calc', calculated);
            //    console.log('current recent', this.state.recent);
               let newCalc = parseFloat(calculated + arg.toString());
               this.setState(() => ({calculation: newCalc}));
                 }
               else   
               {
           //      console.log('arg else - probably was op in between', arg, ' recent ', recent);
                 this.setState(() => ({calculation: arg}));
          //       console.log('calc is ', this.state.calculation)
            }
            break;  
      case 'C':
        //   this.setState(() => ({calculation: 0}));
        //   this.setState(() => ({finalcalc: []}));
        //   this.setState(() => ({operator: null}));
        //   this.setState(() => ({recent: 0}));
          this.doInit();
          break;
      case '.':
            //if number
            if(yesNumRecent){
                console.log('decimal added: ',recent.toString() + arg);
                let newDec = parseFloat(calculated + arg);
                console.log('decimal make sense?: ',newDec);
                this.setState(() => ({calculation: newDec}));
            }
            break;
      case '+':
      case '-':
      case '*':
      case '/':

          this.addCalculation(calculated);
          console.log('calculated is:', calculated);
          this.setState(() => ({operator: arg}));
       
          console.log('array? op', this.state.finalcalc); 
        
          break;
      case '=':
           //reset calculation to zero
           
         //put last number into finacalc array
            //do operations here
           console.log('B4 op: recent vs calculated', recent,' - ', calculated);
           let operated = this.doOperation(this.state.operator, calculated, this.state.finalcalc);
           console.log(operated);   
            if(operated==="n/a"){
                //do init
                console.log("zero");
                this.addCalculation(operated);
            }
            else{
            this.addCalculation(operated);
            this.setState(() => ({calculation: operated}));
            }
          break;
      case '0':
      console.log(typeof(arg));
      console.log(typeof(op));
      if (op === '/') {
          console.log('do not divide by zero');
          this.doInit("n/a");
      }
      break;
      default:
          break;
   }
 }

   onScreen =  () => {
       //this should be the calculated result instead of recent
       let final = 0;
       if(this.state.finalcalc.length===0){
           final = 0;
       }
       else 
       {
        //get last item of the array - probably need to figure out how many items   
        let finalarr= this.state.finalcalc;
 //       console.log('b4 operation ',finalarr);
        final = (finalarr[finalarr.length -1]).toFixed(2).replace(/\.?0*$/g,'');
  //      console.log('b4 op - what is final', final);
           //final = (this.state.finalcalc)[0].toFixed(2).replace(/\.?0*$/g,'');
        }
       let interim = (this.state.calculation).toFixed(2).replace(/\.?0*$/g,'');
       let recent = this.state.recent;
       //console.log(typeof(recent));
      switch(recent){
         case 'C':
            return '0';
      case '+':
      case '-':
      case '*':
      case '/':
            console.log('interim', this.state.calculation);
            console.log('final', final);
            return final;   
      case '=':
            return final; 
      case 'n/a':
            return "n/a";     
      default:
            return interim;   
      }
   }

   doOperation = (op,rec, calcu) => {
       console.log('calcu b4 operation', calcu);
       let val;
       if(calcu.length===0){
           val = 0;
       }
       else 
       {
        //get last item of the array - probably need to figure out how many items   
           val = (calcu[calcu.length -1]).toFixed(2).replace(/\.?0*$/g,'');
          }

       switch(op) {
           case '+':
           console.log('recent', parseFloat(rec));
           console.log('calculation +', parseFloat(val));
              
              return (parseFloat(val) + parseFloat(rec));
           case '-':
              console.log('recent', parseFloat(rec));
              console.log('calculation minus', parseFloat(val));
             return (parseFloat(val) - parseFloat(rec));
          case '*':
             return (parseFloat(rec) * parseFloat(val));  
          case '/':
             console.log(typeof(rec));
             if(rec===0){
                 //this.doInit();
                 return "n/a";
             }
             else
                {return (parseFloat(val) / parseFloat(rec));  }
          default:
             console.log('huh? = might be');
             return parseFloat(this.state.calculation); 
       }
   }

   doInit(screen=0){
       console.log(screen);
    this.setState(() => ({calculation: 0}));
    this.setState(() => ({finalcalc: []}));
    this.setState(() => ({operator: null}));
    this.setState(() => ({recent: screen}));
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