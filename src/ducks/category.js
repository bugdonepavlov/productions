import { List, fromJS } from 'immutable';
import types from 'mock/types';

export const FETCH_TYPES = 'FETCH_TYPES';
export const CATEGORY_TYPE = 'CATEGORY_TYPE';

export default function reducer(state = List().concat(fromJS(types)), action = {}) {
	switch (action.type) {
		case CATEGORY_TYPE:
			return state.concat(fromJS(action.payload.data));
		default:
			return state;
	}
}

export function categoryType(types) {
	return { type: CATEGORY_TYPE, payload: { data: types } }
}