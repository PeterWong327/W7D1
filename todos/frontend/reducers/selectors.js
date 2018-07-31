// import configureStore from '../store/store';



export const allTodos = (( todos ) => {
  let keys = Object.keys(todos);
  let myArray  = [];
  keys.forEach((key) => {
    myArray.push(todos[key]);
  });
  return myArray;
});

// export const AllTodos = ({ configureStore.todos }) => (
// 	Object.keys(configureStore.todos).map(id => configureStore.todos[id])
// );
