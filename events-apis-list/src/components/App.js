import React from 'react';
import SearchBar from "./SearchBar";


class App extends React.Component {
	onSearchSubmit = (term) => {
		console.log(term);
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
