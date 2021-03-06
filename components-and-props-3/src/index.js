import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard"
import Children from "./children/Children";
import DocumentUpload from "./children/DocumentUpload";
import InfromationUpdate from "./children/InformationUpdate";


const App = () => {

	return (
		<>
			<div className="ui container comments">
				{/*pass child elements by wrapping them in the parents element tag*/}
				<ApprovalCard>
					<h2>party at masons house!!!</h2>

				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail author={faker.name.firstName()}
										timeAgo={faker.date.past().toString()}
										avatar={faker.image.avatar()}
										text={faker.lorem.sentence()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail author={faker.name.firstName()}
										timeAgo={faker.date.past().toString()}
										avatar={faker.image.avatar()}
										text={faker.lorem.sentence()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail author={faker.name.firstName()}
										timeAgo={faker.date.past().toString()}
										avatar={faker.image.avatar()}
										text={faker.lorem.sentence()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail author={faker.name.firstName()}
										timeAgo={faker.date.past().toString()}
										avatar={faker.image.avatar()}
										text={faker.lorem.sentence()}
					/>
				</ApprovalCard>
			</div>
			<Children>
				<DocumentUpload/>
			</Children>
			<Children>
				<InfromationUpdate/>
			</Children>
		</>
	);

};

ReactDOM.render(<App/>, document.querySelector('#root'));


