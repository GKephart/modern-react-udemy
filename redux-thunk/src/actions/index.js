import jsonPlaceHolder from "../api/jsonPlaceHolder"



export const fetchPosts = () => {
	return function(dispatch, getState) {
		//define the typ
		const type = "FETCH_POSTS";
		//define the payload
		const payload = jsonPlaceHolder.get("posts");
		return({type , payload});
	}

};