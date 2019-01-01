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
const ButtonAdder = () => {
    //const op = 'className="operator"';
   
    return(
        <Layout className="keys">

                {rows.map((row) => 
                    //row goes in here
                    row.map((item, i, arr) => 
                    <CalcButton 
                    item = {item}
                    className = {(arr.length-1 === i)? 'operator':'num'}
                    key = {item}
                    />)
             )}
             <CalcButton 
                    item = "0"
                    className = "num"
                    key = "0"
                    />
             <CalcButton 
                    item = "."
                    className = "decimal"
                    key = "."
                    />
             <CalcButton 
                    item = "="
                    className = "equal"
                    key = "="
                    />
               <CalcButton 
                    item = "*"
                    className = "operator"
                    key = "*"
                    />                      
               
            
            
        </Layout>
    )
    //add the operators

}
export default ButtonAdder;