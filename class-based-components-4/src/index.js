import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from "./SeasonDisplay";


class App extends React.Component {
	// abbreviated syntax that takes advantage of babel to setup/define the constructor
	state = {lat: null, foo: "poo", error: ''};
	//equivalent to
	/*constructor(props) {
		super(props);
		//this.state = {lat: null, foo: "poo", error: ''};
	*/

	/**
	 * init loading of data should only occur in the componentDidMount method
	 * note: never directly set state after init TLDR this.state.foo = "Y U NO use this.setState() mutator"
	 * note: in order to update state the setState mutator must be called
	 */
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude}),
			(error) => this.setState({lat: - 35.11, error: error.message})
		);
	}

	/**
	 *update should be called when data needs to be loaded after init ie when props/state need to change
	 */
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(prevProps, prevState, snapshot, "mason" + this.state.foo +"bear caused an update" )
	}

	//react demands we have a render method if we extend React.Component cough cough contract.
	render() {

		return <SeasonDisplay lat={this.state.lat}/>
		// if(!this.state.error && this.state.lat) {
		//
		// } else if (this.state.error && !this.state.lat !== -35){
		// 	return <div>Mason {this.state.foo} Bear caused {this.state.error}</div>
		// }
		// return <h1>Y U NO let me load</h1>
	}
}

ReactDOM.render(<App/>, document.querySelector('#root',));