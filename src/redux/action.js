export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text
  }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const updateTodo = (id, newTodo) => ({
  type: EDIT_TODO,
  payload: {
    id,
    newTodo
  }
});
