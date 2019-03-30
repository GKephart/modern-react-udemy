import React from 'react';
import ReactDOM from 'react-dom'

let foo = "poo";
let getCurrentLocation = () => (
	window.navigator.geolocation.getCurrentPosition(
		position => position,
		error => console.log(error)
	));

const App = () => (
	<div>
		<h1>mason is a {foo} {getCurrentLocation()} bear</h1>
	</div>
);

ReactDOM.render(<App/>, document.querySelector('#root',));