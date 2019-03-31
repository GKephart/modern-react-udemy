import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component {



	//same constructor different language
	constructor(props) {
		//supper passes data into React.Component's constructor.
		super(props);

		// sets up state for the App object
		this.state = {lat: null, foo: "poo"};



	}

	/**
	 * init loading of data should only occur in the componentDidMount metho
	 */
	componentDidMount() {

		window.navigator.geolocation.getCurrentPosition(
			position => {

				//in order to update state the setState mutator must be called
				this.setState({lat: position.coords.latitude});

				//never directly set state after init TLDR this.state.foo = "Y U NO use this.setState() mutator"
				console.log(position);
			} ,
			(error) => {
				this.setState({lat: - 35.11, error: error.message});

			}
		);
	}


	/**
	 *update should be called when data needs to be loaded after init when props/state need to change
	 */
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(prevProps, prevState, snapshot, "mason" + this.state.foo +"bear caused an update" )
	}

	//react demands we have a render method if we extend React.Component cough cough contract.
	render() {

		let foo = "poo";


		if(!this.state.error && this.state.lat) {
			return <div>Mason {foo} bear is eating a jar of honey @ {this.state.lat} </div>
		} else if (!this.state.error && !this.state.lat !== -35){
			return <div>Mason {foo} Bear caused {this.state.error}</div>
		}
		return <h1>Y U NO let me load</h1>
	}
}

ReactDOM.render(<App/>, document.querySelector('#root',));