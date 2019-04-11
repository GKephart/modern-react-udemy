import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	};

	renderList() {
		return (this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user"/>
					<div className="content">
						<div className="description">
							{post.title}
							{post.body}
						</div>
					</div>
					<UserHeader userId={post.userId}/>
				</div>
			)

		}))
	}


	render() {
		console.log(this.props);
		return (
			<div className="ui relaxed divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {posts: state.posts};

};

export default connect(mapStateToProps, {fetchPosts}
)(PostList);