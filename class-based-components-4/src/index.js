import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component {


	//react demands we have a render method if we extend React.Component cough cough contract.
	render() {
		let foo = "poo";

		let getCurrentLocation = () => (
			window.navigator.geolocation.getCurrentPosition(
				position => console.log(position),
				error => console.log(error)
			));

		return (
			<div>
				<h1>mason is a {foo} {getCurrentLocation()} bear</h1>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#root',));