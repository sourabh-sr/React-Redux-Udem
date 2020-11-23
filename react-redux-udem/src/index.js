import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {console.log(position)}, 
//         (error) => {console.log(error)}
//     );
//     return (
//         <div>Lattitude: </div>
//     );
// }

class App extends React.Component {
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {console.log(position)}, 
            (error) => {console.log(error)}
        );

        return (
            <div>Lattitude: </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));