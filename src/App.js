import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import List from './components/pages/List';
// import AddTodo from './components/AddTodo';
// import Todos from './components/Todos';
import About from './components/pages/About';
import './App.css';
// import uuid from 'uuid';
// import axios from 'axios';


class  App extends Component {
  
  render() {
   return (
     <Router>
        <div className="App">
          <Header/>
          <Route exact path='/' render={props => (
            <div className='start-page'>
            <div>Now is the right moment</div>
              <p>Welcome to the To do list app</p>
            </div>
          )}/>
          <Route path='/about' component={About}/>
          <Route path='/list' component={List}/>
        </div>
     </Router>
    );
  }
}


export default App;
