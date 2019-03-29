import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";

const App = () => {
	return (
		<div className="ui container comments">

			{/*how to call outside components into other components*/}
			<CommentDetail/>
			<CommentDetail/>
			<CommentDetail/>
			<CommentDetail/>
			<CommentDetail/>
		</div>
	);

};

ReactDOM.render(<App/>, document.querySelector('#root'));