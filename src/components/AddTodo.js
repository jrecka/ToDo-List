import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        });
    }
    render () {
        return (
            <form 
                onSubmit={this.onSubmit}
                className='list-decoration '>
                <input 
                    className='rounded-edges'
                    type='text' 
                    name='title' 
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}/>
                <input 
                    type='submit' 
                    value='Submit'
                    disabled={this.state.title? false : true}
                    className="btn rounded-edges submit-btn"/>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}
export default AddTodo;