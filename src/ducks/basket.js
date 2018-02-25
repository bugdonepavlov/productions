import { List, fromJS } from 'immutable';
import { push } from 'react-router-redux';

export const ADD_BASKET_ITEMS = 'ADD_BASKET_ITEMS';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';
export const CLEAR_BASKET = 'CLEAR_BASKET';

export default function reducer(state = List(), action = {}) {
	switch (action.type) {
		case ADD_BASKET_ITEMS:
			// Remove duplicates by toSet -> toList
			return state.concat(fromJS(action.payload.data)).toSet().toList();
		case REMOVE_BASKET_ITEM:
			return state.delete(action.payload.index);
		case CLEAR_BASKET:
			return List();
		default:
			return state;
	}
}


export function addBasketItems(input) {
	let data = List();
	if (!List.isList(input)) data = data.push(input);
	else data = input;
	return { type: ADD_BASKET_ITEMS, payload: { data } };
}
export function removeBasketItem(index) {
	return { type: REMOVE_BASKET_ITEM, payload: { index } }
}

export function clearBasket() {
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