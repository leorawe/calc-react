# React Calculator 
Added buttons and the screen.  Thinking through the logic: get n/a when try to divide by zero. 
Decimals work.  
Used styled-components for theming.  

## Demo  
[See Calculator demo](https://calc-react.netlify.com/)  
Deployed to Netlify 

## Styling  
App uses styled-components - button has a default color, but each button can instead use specific color  
Calculator as a whole used a design palette:  
[http://colorpalettes.net/color-palette-3958/](http://colorpalettes.net/color-palette-3958/)  
App was originally set up with classes, but halfway through, decided to try out styled-components.  Would use theming of styled-components for a larger app.  The classes that were originally added turned out to be useful for debugging, because the classes created by styled-components were strange looking and hard to read.  

## Calculation and State  
State is set when a button is clicked.  This is done via a function on the main App state. The item clicked is stored in a variable called recent.  When a calculation is made, it get stored in an array.  It could possibly have been just a variable that gets rewritten each time, but doing it as an array helped with debugging the app.  If one tries to divide by zero, one gets n/a, and the app re-inits.  

### To Do  
--> button when selected have blue border - why?  
- write up more about the app  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
