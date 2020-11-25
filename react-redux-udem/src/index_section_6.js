import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {this.setState({lat: position.coords.latitude})}, 
            (error) => { this.setState({errorMessage: error.message})}
        );
    }

    renderContent() {
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        return <Spinner message="Please accept location request"/>;
    }
    // React says we have to define render
    render(){
        return (
            <div className="borderRed">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));