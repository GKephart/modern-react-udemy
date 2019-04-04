import React, {Component} from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends Component {
	renderList= () => (
		this.props.songs.map(song => (
			<div className="item" key={song.title}>
				<div className="right floated content">
					<div onClick={() => this.props.selectSong(song)} className="ui button primary">Select</div>
				</div>
				<div className="content">
					{song.title}
				</div>
			</div>
			)
		)
	);
	render() {
		console.log(this.props);
		return (

			<div className="ui divided list">{this.renderList()}</div>
		)
	}
}

const mapStateToProps = state => {
	return state;

};
export default connect(mapStateToProps,
	{
		//action creators go here
		selectSong
	}) (SongList);