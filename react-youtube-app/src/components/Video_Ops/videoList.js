import React from 'react';
import VideoItem from './videoItem';

class VideoList extends React.Component {

    render(){
        return (
            this.props.videos.map((video)=>{
                return (
                    <div className="ui relaxed divided list">
                        <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video}/>
                    </div>
                )
            })
        );
    }

}

export default VideoList;