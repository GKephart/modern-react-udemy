import jsonPlaceHolder from "../api/jsonPlaceHolder"

import _ from "lodash";


export const fetchPosts = () => async (dispatch) => {
	const payload =  await jsonPlaceHolder.get("posts");
	dispatch({type: "FETCH_POSTS",payload : payload.data });
};

export const fetchUser = (id) =>  async dispatch => {
	const {data} = await  jsonPlaceHolder.get(`users/${id}`);
	dispatch({type: "FETCH_USER", payload: data});
};

export const  fetchPostsAndUsers = () => async (dispatch, getState) => {

	await dispatch(fetchPosts());


	//commented out lines below are equivalent to the _ chain method
	// const userIds = _.uniq(_.map(getState().posts, "userId"));
	// userIds.forEach(id => dispatch(fetchUser(id)));

_.chain(getState().posts)
	.map("userId")
	.uniq()
	.forEach(id => dispatch(fetchUser(id)))
	.value()
};



//memoization quick and dirty approach to grasbbing unique data
/**
export const fetchUser = (id) => dispatch => {
	_fetchUser(id, dispatch )
};

const  _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await  jsonPlaceHolder.get(`users/${id}`);
	dispatch({type: "FETCH_USER", payload: response.data});
});
*/