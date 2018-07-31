import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newTodos = merge({}, state);
      action.todos.forEach ((todo) => {
        newTodos[todo.id] = todo;
      });
      return newTodos;
    case RECEIVE_TODO:
      let newTodo = merge({}, state);
      newTodo[action.todo.id] = action.todo;
      return newTodo;
    default:
    return state;
  }
};

export default todosReducer;
