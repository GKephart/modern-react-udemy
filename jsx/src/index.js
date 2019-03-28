//import React and React Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom'

//create a react component
const App = () => {
  return <div> Hello World</div>;
}

// display the component on the domain
ReactDOM.render(<App />, document.querySelector('#root',));
