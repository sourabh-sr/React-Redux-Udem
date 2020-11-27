import React from 'react';

export default class ImageList extends React.Component {
    
    renderImages() {
            return (this.props.images.map(({description, id, urls})=>{
                return <img alt={description} key={id} src={urls.regular}/>
            })
        )
    }
    
    render () {
        return (
            <div>{this.renderImages()}</div>
        );
    }
}