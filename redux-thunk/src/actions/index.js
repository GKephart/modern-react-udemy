import jsonPlaceHolder from "../api/jsonPlaceHolder"


export const fetchPosts = () => async dispatch => {
	//define the typ
	const type = "FETCH_POSTS";
	//define the payload
	const payload = await jsonPlaceHolder.get("posts");
	dispatch({type, payload});
};