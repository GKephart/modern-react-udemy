import React from 'react';

const seasonConfig = {
	summer: {
		text: "Mason's super soft party will be hawt",
		iconName: 'fire'
	},
	winter: {
		text: "Mason's super soft party will be chilly",
		iconName: "ice"

	}
};

const getSeason = (lat, month) => {
	let season = month > 2 && month < 9 ?
		lat > 0 ? 'summer' : 'winter' :
		lat > 0 ? 'winter' : 'summer';
	return season
};
const SeasonDisplay = (props) => {
	const currentSeason = getSeason(props.lat, new Date().getMonth());
	const {text, icon} = seasonConfig[currentSeason];

	return (
		<>
			<i className={`${icon} icon`}/>
			<h2>{text}</h2>
			<i className={`${icon} icon`}/>
		</>
	);
};
export default SeasonDisplay;

