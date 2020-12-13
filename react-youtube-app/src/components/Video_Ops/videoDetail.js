import React from 'react';


class VideoDetail extends React.Component {
    render(){
        if(!this.props.videoSelected) {
            return <div>Loading.....</div>
        } else {
        const videoSrc = `https://www.youtube.com/embed/${this.props.videoSelected.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="videoPlayer" src={videoSrc}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.videoSelected.snippet.title}</h4>
                    <p>{this.props.videoSelected.snippet.description}</p>
                </div>
            </div>
        );
    }
    }
}

export default VideoDetail;