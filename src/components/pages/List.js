import React, { Component } from 'react';
import AddTodo from '../../components/AddTodo';
import Todos from '../../components/Todos';
import axios from 'axios';


class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount = (id) => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then( response => this.setState({
                todos: response.data
            }))
    }
    // Toggle complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map( todo => {
                if( todo.id === id ) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }
    // Delete Todo
    deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then( response => 
                this.setState({
                    todos: [...this.state.todos.filter(
                        todo => todo.id !== id)]
            }
        ));
    }
    // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(response => 
      this.setState({
  
        todos: [...this.state.todos, response.data]
      }) 
      )
    // console.log(title) 
    // }
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
  }
    render() {
        return(
            <div className='container'>
                <AddTodo
                    addTodo={this.addTodo}/>
                <Todos 
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default List;