import React from 'react';
import Screen from './Screen';
import ButtonAdder from './ButtonAdder';
import CalcButton from './CalcButton';
import styled from 'styled-components';
const num = 0;
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

const App = () => {
    return (
         <Calc>
            <Top>
                    <CalcButton 
                    item = "C"
                    className = "clear"
                    key = "c"
                    buttonBack = "red"
                    /><Screen result={num} />
             </Top>    
             <ButtonAdder class="button-section" />
        </Calc>
    );
};

export default App;