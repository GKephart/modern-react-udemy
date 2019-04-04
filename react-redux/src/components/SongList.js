import React, {Component} from "react";
import {connect} from "react-redux";

class SongList extends Component {

	renderList= () => (
		this.props.songs.map(song => (
			<div className="item" key={song.title}>
				<div className="right floated content">
					<div className="ui button primary">Select</div>
				</div>
				<div className="content">
					{song.title}
				</div>
			</div>
			)
		)
	);
	render() {

		return (

			<div className="ui divided list">{this.renderList()}</div>
		)
	}
}

const mapStateToProps = state => {
	return state;

};
export default connect(mapStateToProps) (SongList);