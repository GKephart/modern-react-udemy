import React from 'react';

const Spinner = (props) => (
	<div className="ui active dimmer">
		<div className="ui huge text loader">{props.message}</div>
	</div>
);

Spinner.defaultProps = {
	message: "Mason knocked over just the tip"
};

export default Spinner;
