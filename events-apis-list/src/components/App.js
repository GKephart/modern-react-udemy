import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = {images : []};
	 onSearchSubmit = async (term) => {
	const reply =	await unsplash.get('/search/photos', {
		params: {query: term}
	});
		 this.setState({images: reply.data.results})
	};

	render() {
		return (
			<div className="container ui" style={{marginTop: '10px'}}>
				<SearchBar onSubmitFromChildComponent={this.onSearchSubmit}/>
				Found: {this.state.images.length} images
			</div>
		)
	}
}


export default App
