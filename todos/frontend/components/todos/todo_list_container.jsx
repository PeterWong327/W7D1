import { connect } from 'react-redux';
import List from './todo_list';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
	receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

// export default ListContainer;
