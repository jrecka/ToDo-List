import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            width: '50%',
            margin: '0 auto',
            padding: '10px',
            backgroundColor: '#a3b8b9b3',
            borderBottom: '2px solid #5b5c5799',
            borderRight: '2px solid #5b5c5799',
            borderLeft: '2px solid #5b5c5799',
            fontSize: '20px',

            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                        onChange={
                            this.props.markComplete.bind(this, id)
                        }
                    /> {'  '}
                    {title}
                    <button onClick={
                        this.props.deleteTodo.bind(this, id)
                        }
                        className ="btn-style">
                            <i className="fas fa-trash-alt"></i>
                    </button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;