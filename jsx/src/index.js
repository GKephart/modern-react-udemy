//import React and React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom'

//create a react component
const App = () => {
  return(
	  <div><label className="label" for="name">Enter Name</label>
		  <input type="text"/>
		  <button style={{backgroundColor:'blue', color: 'white;'}}>click me please</button>
	  </div>   
  );
};

// display the component on the domain
ReactDOM.render(<App />, document.querySelector('#root',));

