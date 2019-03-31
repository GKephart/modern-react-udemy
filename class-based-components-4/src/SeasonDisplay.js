import React from 'react';

const getSeason = (lat, month) => {
	return month > 2 && month < 9 ? lat > 0 ? 'summer' : 'winter' : lat > 0 ? 'winter' : 'summer';
};
const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	//  happens in the {season}
	return (
		<h2>{season === 'winter' ? "Mason's super soft party will be chilly" : "Mason's super soft party will be hawt"}</h2>
	);
};
export default SeasonDisplay;

