// import { List, fromJS, Map } from 'immutable';
// import types from 'mock/types';
// import dishes from 'mock/dishes';

// const FETCH_DATA = 'FETCH_DATA';
// const LOADING_ACTIVE = 'LOADING_ACTIVE';

// const initialState = Map({
// 	data: Map(),
// 	loading: false,
// });


// export default function reducer(state = initialState, action = {}) {
// 	switch (action.type) {
// 		case LOADING_ACTIVE:
// 			return state.merge({ loading: true });
// 		case FETCH_DATA:
// 			console.log('action.payload.data', action.payload.data)
// 			// return state.merge({ data: action.payload.data, loading: false});
// 		default:
// 			return state;
// 	}
// }

// export function fetchData() {
// 	return (dispatch) => {
// 		// dispatch({ type: LOADING_ACTIVE });
// 		getMock(types, dishes)
// 		.then(data => ({
// 			dispatch({type: FETCH_DATA, payload: { data }})
// 		})).catch(error => console.log(error))
// 	}
// }

// function getMock(types, dishes) {
// 	return new Promise((res, rej) => {
// 		setTimeout(() => {
// 			return res({obj: 'hello'})
// 			// return res(Map({
// 			// 	category: List().concat(fromJS(types)),
// 			// 	dishes: List().concat(fromJS(dishes)),
// 			// }))
// 		}, 2000);
// 	})
// }