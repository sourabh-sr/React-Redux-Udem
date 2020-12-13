import React from 'react';
import './videoItem.css';

class VideoItem extends React.Component{

    onVideoSelect = (video) => {
        this.props.onVideoSelect(video);
    }

    render(){
        return (
            <div className="video-item item" onClick={()=>{this.props.onVideoSelect(this.props.video)}}>
                <img alt={this.props.video.snippet.title} className="ui image" src={this.props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;
