import React from 'react';

class ImageCard extends React.Component {
	state = {};
	render() {
		return(
			<div>
				<img src={this.props.image.urls.regular}
					  alt={this.props.image.description}
				/>
			</div>
		);
	}
}

export default ImageCard;