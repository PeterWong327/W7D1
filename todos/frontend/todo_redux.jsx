import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;

  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Todos App</h1>, root);
});
