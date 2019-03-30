import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component {

	//same constructor different language
	constructor(props) {
		//supper passes data into React.Component's constructor.
		super(props);

		// sets up state for the App object
		this.state = {lat: null};
	}


	//react demands we have a render method if we extend React.Component cough cough contract.
	render() {
		let foo = "poo";

			window.navigator.geolocation.getCurrentPosition(
				position => {

					//in order to update state the setState mutator must be called
					this.setState({lat: position.coords.latitude});

					//never directly set state after init TLDR this.state.foo = "Y U NO use this.setState() mutator"
					console.log(position);
				} ,
				() => {
					this.setState({lat: - 35.11});

				}
			);

		return (
			<div>
				<h1>mason is a {foo} {this.state.lat} bear</h1>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#root',));