import React from "react";

const ApprovalCard = (props) => {
	return(
		<div className="ui card">
			<div className="content">
				{/*props.children gives access to children components*/}
				{props.children}
			</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Decline</div>
				</div>
			</div>
		</div>
	)

	};

//export detail is used to export components to other components
export default ApprovalCard;