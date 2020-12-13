import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: 'buildings' }
    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
    onSubmitSearchTerm = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.searchTerm);
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitSearchTerm}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchTerm} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;
