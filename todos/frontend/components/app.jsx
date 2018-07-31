import React from 'react';
import ListContainer from './todos/todo_list_container';

class App extends React.Component {
  render() {
    return (
      <div>
        <ListContainer />
        <h1> We are rendering now !!</h1>
      </div>
    );
  }
}

export default App;
