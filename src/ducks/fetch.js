import { List, fromJS, Map } from 'immutable';
import types from 'mock/types';
import dishes from 'mock/dishes';
import extras from 'mock/extras';

const FETCH_DATA = 'FETCH_DATA';
const LOADING_ACTIVE = 'LOADING_ACTIVE';

const initialState = Map({
	data: Map({
		category: List(),
		dishes: List(),
		extras: List(),
	}),
	loading: false,
	alert: false,
});

export default function reducer(state = initialState, action = {}) {
	const { type, payload } = action;

	switch (type) {
		case LOADING_ACTIVE:
			return state.merge({ loading: true });
		case FETCH_DATA:
			return state.merge({
				data: {
 					category: payload.data.category,
					dishes: payload.data.dishes,
					extras: payload.data.extras,
				}, loading: false});
		default:
			return state;
	}
}

export function fetchData() {
	return (dispatch) => {
		dispatch({ type: LOADING_ACTIVE });
		return new Promise((res, rej) => {
			setTimeout(() => {
				res({
					category: List().concat(fromJS(types)),
					dishes: List().concat(fromJS(dishes)),
					extras: List().concat(fromJS(extras)),
				})
			}, 2000)
		}).then(data => dispatch({ type: FETCH_DATA, payload: {data}}))
	}
}