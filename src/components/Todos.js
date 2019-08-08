import React from 'react';

class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo => (
            <div>{ todo.title}</div>   
        )));
    }
}

export default Todos;