import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {id, title} = this.props.todo;
        return (
            <div 
                style={this.getStyle()}
                className='list-decoration'>
                    <label>
                    <input 
                        type="checkbox" 
                        onChange={
                            this.props.markComplete.bind(this, id)
                        }
                        /> {'  '}
                        {title}
                    </label>
                    <button 
                        onClick={
                            this.props.deleteTodo.bind(this, id)
                        }
                        className ="delete-btn rounded-edges btn">
                            <i className="fas fa-trash-alt"></i>
                    </button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem;