import jsonPlaceHolder from "../api/jsonPlaceHolder"


export const fetchPosts = () => async dispatch => {
	const payload =  await jsonPlaceHolder.get("posts");
	dispatch({type: "FETCH_POSTS",payload : payload });
};