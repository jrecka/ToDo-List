import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
import './App.css';
import uuid from 'uuid';
import axios from 'axios';


class  App extends Component {
  constructor(props){
    super(props);
      this.state = {
        todos: []
      }
    }
  componentDidMount = (id) => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos?_limit=10')
      .then(response => this.setState({
        todos: response.data
      })
    )
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
    axios.post('https://jsonplaceholder.typicode.com/users/1/todos?_limit=10', {
      title,
      completed: false
    })
    .then(response => 
      this.setState({
  
        todos: [...this.state.todos, response.data]
      }) 
      ) 
    // }
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
  }
  render() {
   return (
     <Router>
        <div className="App">
          <div className = 'container'>
          {/* <h1>Now is the right moment</h1> */}
          <Header/>
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo
                addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )}/>
          <Route path='/about' component={About}/>
            </div>
        </div>
     </Router>
    );
  }
}


export default App;
