export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

let nextId = 5;

//actionsCrietors
export function addTodo(title) {
    return {
        type: ADD_TODO,
        id: nextId++,
        title
    };
}