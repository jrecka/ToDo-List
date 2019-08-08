import React from 'react';
import Todos from './components/Todos';
import './App.css';

class  App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Walk with my dog",
        completed: false
      },
      {
        id: 2,
        title: "Clean the bathroom",
        completed: false
      },
      {
        id: 3,
        title: "Call a friend",
        completed: false
      },
    ]
  }
  render() {
  return (
    <div className="App">
      <h1>Lol</h1>
      <Todos todos={this.state.todos}/>
    </div>
    );
  }
}


export default App;
