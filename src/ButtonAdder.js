import React from 'react';
import CalcButton from './CalcButton';
import styled from 'styled-components';
const row1 = [7,8,9,'+'];
const row2 = [4,5,6,'-'];
const row3 = [1,2,3,'/'];
//const row4 = [0,'.','=','*'];
let rows = [row1, row2, row3];
//do something - do each button one by one
// {(arr.length-1 === i)? 'className="operator"':''}
//clear button goes first
//map numbers 1 to 9

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ButtonAdder = (props) => {
    //const op = 'className="operator"';
   // console.log(props.onResultChange);
    return(
        <Layout className="keys">

                {rows.map((row) => 
                    //row goes in here
                    row.map((item, i, arr) => 
                    <CalcButton 
                    item = {item}
                    className = {(arr.length-1 === i)? 'operator':'num'}
                    buttonBack = {(arr.length-1 === i)? '#249999':'#2ebdbd'}
                    key = {item}
                    onResultChange={props.onResultChange}
                    />)
             )}
             <CalcButton 
                    item = "0"
                    className = "num"
                    key = "0"
                    onResultChange={props.onResultChange}
                    />
             <CalcButton 
                    item = "."
                    className = "decimal"
                    key = "."
                    onResultChange={props.onResultChange}
                    />
             <CalcButton 
                    item = "="
                    className = "equal"
                    key = "="
                    buttonBack = "#ceae7f"
                    onResultChange={props.onResultChange}
                    />
               <CalcButton 
                    item = "*"
                    className = "operator"
                    buttonBack = "#249999"
                    key = "*"
                    onResultChange={props.onResultChange}
                    />                      
               
            
            
        </Layout>
    )
    //add the operators

}
export default ButtonAdder;