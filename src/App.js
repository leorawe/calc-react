import React from 'react';
import Screen from './Screen';
import ButtonAdder from './ButtonAdder';
import CalcButton from './CalcButton';
import styled from 'styled-components';
const num = 0;
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

const App = () => {
    return (
        <Wrapper>
         <Calc>
            <Top>
                    <CalcButton 
                    item = "C"
                    className = "clear"
                    key = "c"
                    buttonBack = "#ceae7f"
                    /><Screen result={num} />
             </Top>    
             <ButtonAdder class="button-section" />
        </Calc>
    </Wrapper>   
    );
};

export default App;