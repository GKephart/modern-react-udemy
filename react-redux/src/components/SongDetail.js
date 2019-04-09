import React from "react";
import {connect} from "react-redux";


const SongDetail = (props) => {
	console.log(props.song);

	if(props.song !== null) {
		return (
			<div className="ui card">
				<div className="content">
					<span className="header">{props.song.title}</span>
					<div className="meta">
						<span className="date">rocking since 1992</span>
					</div>
					<div className="description">
						{props.song.duration}
					</div>
				</div>
				<div className="extra content">
					<i className="music icon"></i>
				</div>
			</div>
		);
	}
	return <div>fuck off</div>


};

const mapStateToProps = (state) => {
	return {song: state.selectedSong};

};

export default connect(mapStateToProps)(SongDetail);