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
      <div className = 'container'>

      <h1>Now is the right moment</h1>
      <Todos todos={this.state.todos} 
        markComplete={this.markComplete} />
        </div>
    </div>
    );
  }
}


export default App;
