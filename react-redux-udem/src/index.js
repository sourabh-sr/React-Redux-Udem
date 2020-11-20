// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
//Create a React Component
function getButtonName(){
    return 'Click Me From Function!';
}
const App = () => {
    // const buttonText = 'Click Me!';
    /**
     * Objects can be passed in the button name. Eg obj = {text: 'Click Me!!'}
     */
    const labelName = 'Enter Name'
    return ( 
        <div>
            <label className="label" htmlFor="name">{labelName}: </label> {/*for="name" in Javascript*/}
            <input id="name" type="text"/>
            {/* <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button> */}
            {/* <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button> */}
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonName()}</button>
        </div>
    );
}
//Take the React Component and show it on the screen
ReactDOM.render( <
    App / > , document.querySelector('#root')
);