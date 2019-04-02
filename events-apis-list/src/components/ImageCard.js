import React from 'react';

class ImageCard extends React.Component {

	constructor(props) {
		super(props);

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpan)
	}

   setSpan = () => {
		console.log(this.imageRef.current.clientHeight);
	};

	render() {
		let {urls, description} = this.props.image;
		return(
			<div>
				<img
					ref={this.imageRef}
					src={urls.regular}
					alt={description}
				/>
			</div>
		);
	}
}

export default ImageCard;