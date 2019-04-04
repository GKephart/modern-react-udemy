// https://codepen.io/anon/pen/mgVMpp?editors=0010

import {createStore, combineReducers} from 'redux';

/*
* actions
*/
const createPolicy = (newName, newAmount) =>({
	type: "CREATE_POLICY",
	payload: {
		name: newName,
		amount: newAmount
	}
});

const deletePolicy = (newName) => ({
	type: 'DELETE_POLICY',
	payload: {
		name: newName
	}
});

const createClaim = (newName, newAmount) =>({
	type: "CREATE_CLAIM",
	payload: {
		name: newName,
		claimAmount: newAmount
	}
});

/**
 * Reducers
 */

const claimsHistory = (listOfClaims =[], action ) => {
	return (
		action.type === "CREATE_CLAIM" ?
			[...listOfClaims, action.payload] :
			listOfClaims
	);
};
const accounting = (cashOnHand = 10000, action ) => {
	if(action.type === "CREATE_CLAIM") {
		return cashOnHand - action.payload.claimAmount
	} else if (action.type === "CREATE_POLICY") {
		return cashOnHand + action.payload.amount;
	}
	return cashOnHand;
};

const policies = ( listOfPolicies = [], action ) => {
	if(action.type === "CREATE_POLICY") {
		return [...listOfPolicies, action.payload.name];
	} else if(action.type === "DELETE_POLICY") {
		return listOfPolicies.filter(name => name !== action.payload.name);
	}
	return listOfPolicies;
};


const ourDepartments = combineReducers({
	acounting: accounting,
	claims: claimsHistory,
	policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Alen", 20));
store.dispatch(createPolicy("Aron", 20));
store.dispatch(createPolicy("Aaron", 20));
store.dispatch(createPolicy("Nathan", 20));
store.dispatch(createPolicy("Tom", 20));
store.dispatch(createPolicy("Alex", 20));
store.dispatch(createClaim("Alex", 400));
store.dispatch(createClaim("Tom", 400));
store.dispatch(deletePolicy("Alen", 400));

console.log(store.getState());
