import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from '../actions/index';

export default function reducer(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			const todo = {
				id: action.id,
				title: action.title,
				completed: false,
			};
			return [...state, todo];

		case DELETE_TODO:
			const index = state.findIndex(todo => todo.id === action.id);
			return [...state.slice(0, index), ...state.slice(index + 1)];

		case TOGGLE_TODO:
			return [];

		case EDIT_TODO:
			return [];

		default:
			return state;
	}
}
