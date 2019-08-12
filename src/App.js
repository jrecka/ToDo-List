import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';
import uuid from 'uuid';
// import AddTodo from './components/AddTodo';

class  App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Walk with my dog",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Clean the bathroom",
        completed: false
      },
      {
        id: uuid.v4(),
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
  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({

      todos: [...this.state.todos, newTodo]
    }) 
  }
  render() {
   return (
    <div className="App">
      <div className = 'container'>
      {/* <h1>Now is the right moment</h1> */}
      <Header/>
      <AddTodo
        addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} 
        markComplete={this.markComplete}
        deleteTodo={this.deleteTodo} />
        </div>
    </div>
    );
  }
}


export default App;
