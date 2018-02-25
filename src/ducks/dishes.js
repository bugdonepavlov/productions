import { List, fromJS } from 'immutable';
import dishes from 'mock/dishes';
// Action Types
export const FETCH_DISHES = 'FETCH_DISHES';
export const ADD_DISHES = 'ADD_DISHES';

// Reducer
export default function reducer(state = List().concat(fromJS(dishes)), action = {}) {
	switch (action.type) {
		case ADD_DISHES:
			return state.concat(fromJS(action.payload.data));
		default:
			return state;
	}
}

// Actions
// export function fetchDishes() {
// 	return { type: FETCH_DISHES }
// }
export function addDishes(dishes) {
	return { type: ADD_DISHES, payload: { data: dishes } }
}