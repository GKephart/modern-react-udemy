import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";

const App = () => {
	return (
		<div className="ui container comments">

			{/*how to call outside components into other components*/}
			<CommentDetail author ="Sam Jones"/>
			<CommentDetail author ="Sam James"/>
			<CommentDetail author ="Sam Smith"/>
			<CommentDetail author ="Sam Foo"/>
			<CommentDetail author ="Sam Bar"/>

		</div>
	);

};

ReactDOM.render(<App/>, document.querySelector('#root'));