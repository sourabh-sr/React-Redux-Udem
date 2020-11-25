import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''}
    onInputChange(event){
        this.setState({term: event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    // onInputClick(){
    //     console.log("Input is Clicked")
    // } /** onClick={this.onInputClick} */
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            onChange={this.onInputChange.bind(this)}/> {/* onClick={this.onInputClick} */}
                        {/*<input type="text" onChange={(event)=>{this.setState({term: event.target.value})}}/>*/}   {/*:- Alternate Metod*/}
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;