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
    background: #CD853F;
    border-radius: 5px;
    `;
const Top = styled.div`
    display: flex;
    flex-direction: row;
    `;   

const App = () => {
    return (
         <Calc>
            <Top>
                    <CalcButton 
                    item = "C"
                    className = "clear"
                    key = "c"
                    /><Screen result={num} />
             </Top>    
             <ButtonAdder class="button-section" />
        </Calc>
    );
};

export default App;