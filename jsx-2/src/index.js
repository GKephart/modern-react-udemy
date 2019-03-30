//import React and React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom'

//create a react component
const App = () => {

	//this works
	const buttonText = "click me";

	//array duh.
	const buttonTextArray = ["hi", "there"];

	const buttonTextObject = {text: "click me"};

	//es6 accessor function
	const getButtonText = () => "click me pretty please";
  return(
	  <div><label className="label" htmlFor="name">Enter Name</label>
		  <input type="text"/>
		  <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText}</button>
		  <button style={{backgroundColor:'white', color: 'blue'}}>{buttonTextArray}</button>
		  <button style={{backgroundColor:'red', color: 'light-gray'}}>{getButtonText()}</button>
		  {/*how to use objects IE use the object accessor*/}
		  <button style={{backgroundColor:'blue', color: 'white'}}>{buttonTextObject.text}</button>
</div>
  );
};

// display the component on the domain
ReactDOM.render(<App />, document.querySelector('#root',));

