import React from 'react';
import ReactDOM from 'react-dom'

let foo = "bar";
const App = () => (
	<div>
		<h1>mason is a {foo} bear</h1>
	</div>
);

ReactDOM.render(<App />, document.querySelector('#root',));