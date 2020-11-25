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
    // Super is the reference to the parent constructor function
    constructor(){
        super();

        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // We called setState
                this.setState({lat: position.coords.latitude})

                // We should not do :---- this.state.lat = position.coords.latitute
            }, 
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }

    // React says we have to define render
    render(){
        if(!this.state.errorMessage && this.state.lat){
            return <div>Lattitude: {this.state.lat}</div>;
        }
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        return <div>Loading!!</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));