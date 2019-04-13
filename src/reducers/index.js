import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from '../actions/index';

function todoReducer(state = {}, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				id: action.id,
				title: action.title,
				completed: false,
			};

		case TOGGLE_TODO:
			if (state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				completed: !state.completed,
			});

		case EDIT_TODO:
			if (state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				title: action.title,
			});
	}
}

export default function reducer(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			// const todo = {
			// 	id: action.id,
			// 	title: action.title,
			// 	completed: false,
			// };
			// return [...state, todo];
			return [...state, todoReducer(undefined, action)];

		case DELETE_TODO:
			const index = state.findIndex(todo => todo.id === action.id);
			return [...state.slice(0, index), ...state.slice(index + 1)];

		case TOGGLE_TODO:
			// return state.map(todo => {
			// 	if (todo.id !== action.id) {
			// 		return todo;
			// 	}

			// 	return Object.assign({}, todo, {
			// 		completed: !todo.completed,
			// 	});
			// });
			return state.map(todo => todoReducer(todo, action));

		case EDIT_TODO:
			// return state.map(todo => {
			// 	if (todo.id !== action.id) {
			// 		return todo;
			// 	}

			// 	return Object.assign({}, todo, {
			// 		title: action.title,
			// 	});
			// });
			return state.map(todo => todoReducer(todo, action));

		default:
			return state;
	}
}
