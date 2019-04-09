import jsonPlaceHolder from "../api/jsonPlaceHolder"



export const fetchPosts = () => {
	let type = "FETCH_POSTS";
	return({type});
};