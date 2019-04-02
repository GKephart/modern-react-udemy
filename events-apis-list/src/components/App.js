import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
	 onSearchSubmit = async (term) => {
	const reply =	await axios.get("https://api.unsplash.com/search/photos", {
			params: {query: term},
			headers: {
				Authorization: "Client-ID 39e127fbd342d1221079182f004746c9933d29157af9bbeb6484bd9e82e72786"
			}
		});
		 console.log(reply.data.results)
	};

	render() {
		return (
			<div className="container ui" style={{marginTop: '10px'}}>
				<SearchBar onSubmitFromChildComponent={this.onSearchSubmit}/>
			</div>
		)
	}
}


export default App
