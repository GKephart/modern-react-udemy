import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends Component {
	 componentDidMount() {
	 	this.props.fetchPosts();
	 };


	render() {
		console.log(this.props.posts);
		return (
			<h1>Post List</h1>
		);
	}
}

const mapStateToProps = (state) => {
	return {posts: state.posts};

};

export default connect(mapStateToProps, { fetchPosts }
)(PostList);