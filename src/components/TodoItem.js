import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            width: '50%',
            margin: '0 auto',
            backgroundColor: 'rgb(239, 212, 234)',
            padding: '10px',
            borderBottom: '1px #0f2cfa dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}
                    /> {'  '}
                    {title}
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