import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = {images: []};
    // This is using promise .then() function
    /*onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID tUjVOuYQLk6AABA0eSA0Zh94NYAZ_IS-vDenafo0-_g'
            }
        }).then((response)=>{
            console.log(response);
        })
    }*/

    // This is using async await
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('search/photos',{
            params: { query: term },
        });
        this.setState({images: response.data.results});
    }
    
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };
}

export default App;