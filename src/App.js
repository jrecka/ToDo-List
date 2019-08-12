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
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  render() {
   return (
    <div className="App">
      <div className = 'container'>

      <h1>Now is the right moment</h1>
      <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        deleteTodo={this.deleteTodo} />
        </div>
    </div>
    );
  }
}


export default App;
