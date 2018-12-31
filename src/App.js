import React from 'react';
import Screen from './Screen';
import ButtonAdder from './ButtonAdder';
const num = 0;

const App = () => {
    return (
         <div>
             <Screen result={num} />
             <ButtonAdder />
        </div>
    );
};

export default App;