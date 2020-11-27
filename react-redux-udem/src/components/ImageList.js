import './imageList.css';
import React from 'react';
import ImageCard from './imageCard';

export default class ImageList extends React.Component {
    
    renderImages() {
            return (this.props.images.map((image)=>{
                return <ImageCard key={image.id} image={image}/>
            })
        )
    }
    
    render () {
        return (
            <div className="image-list">{this.renderImages()}</div>
        );
    }
}