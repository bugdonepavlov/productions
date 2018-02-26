import { List, fromJS } from 'immutable';
import { push } from 'react-router-redux';

export const ADD_BASKET_ITEMS = 'ADD_BASKET_ITEMS';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';
export const CLEAR_BASKET = 'CLEAR_BASKET';

export default function reducer(state = List(), action = {}) {
	const { type, payload } = action;
	switch (type) {
		case ADD_BASKET_ITEMS:
			return state.concat(fromJS(payload.data)).toSet().toList();
		case REMOVE_BASKET_ITEM:
			return state.delete(payload.index);
		case CLEAR_BASKET:
			return List();
		default:
			return state;
	}
}

export function addItems(item) {
	let data = List();
	if (!List.isList(item)) data = data.push(item);
	else data = item;
	return { type: ADD_BASKET_ITEMS, payload: { data } };
}

export function removeItem(index) {
	return { type: REMOVE_BASKET_ITEM, payload: { index } }
}

export function clear() {
	return (dispatch) => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				return res('Отправлено');
			}, 2000);
		})
		.then(() => {
			dispatch(push('/'));
			dispatch({ type: CLEAR_BASKET });
		})
	}
}