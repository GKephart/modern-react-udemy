import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
	const getSaneDate = () =>{
		return "I really despise dates"

	};

	return (
		<div className="ui container comments">
			{/*how to call outside components into other components*/}
			<CommentDetail author ={faker.name.firstName()} timeAgo="I really despise dates" avatar={getSaneDate()} text={faker.lorem.sentences()}/>

		</div>
	);

};

ReactDOM.render(<App/>, document.querySelector('#root'));