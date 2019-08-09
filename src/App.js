import React from 'react';
import Todos from './components/Todos';
import './App.css';

class  App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Walk with my dog",
        completed: true
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
  markComplete = (id) => {
    console.log(id);
  }
  render() {
   return (
    <div className="App">
      <h1>Lol</h1>
      <Todos todos={this.state.todos} 
        markComplete={this.markComplete} />
    </div>
    );
  }
}


export default App;
