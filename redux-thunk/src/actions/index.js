import jsonPlaceHolder from "../api/jsonPlaceHolder"


export const fetchPosts = () => async dispatch => {
	const payload =  await jsonPlaceHolder.get("posts");
	dispatch({type: "FETCH_POSTS",payload : payload.data });
};

export const fetchUser = (id) => async dispatch => {
	const response = await  jsonPlaceHolder.get(`users/${id}`);
	dispatch({type: "FETCH_USER", payload: response});
};