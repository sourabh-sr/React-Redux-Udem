import React from 'react';
import SearchBar from './Search_Bar/search_bar';
import api from '../apis/api';
import VideoList from './Video_Ops/videoList';
import VideoDetail from './Video_Ops/videoDetail';

const KEY = '';

class App extends React.Component {

    state = {youtubeVideoList: [], selectedVideo: null};

    componentDidMount (){
        this.onTermSubmit('buildings')
    }

    searchedTerm = (data) => {
        console.log(data);
        // this.onVideoSelect(data[0])
    }

    onVideoSelect = (video) => {
        console.log('From the app', video);
        this.setState({selectedVideo: video})
    }

    onTermSubmit= async(term) => {
        const response = await api.get('/search', {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        this.setState({
            youtubeVideoList: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail videoSelected={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.youtubeVideoList}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;