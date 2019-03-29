import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'

const CommentDetail= () => {
	return(
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={faker.image.avatar()}/>
			</a>
			<div className="content">
				<a href="http://" className="author">
					Sam Jones
				</a>
				<div className="metadata">
					<span className="date">Today at 6:35pm</span>
				</div>
				<div className="text">
					Can you pimp this powerpoint, need more geometry patterns i love it, but can you invert all colors? or
					just do what you think. I trust you, or that's great, but we need to add this 2000 line essay yet just
					do what you think.
				</div>
			</div>
		</div>
	)
};