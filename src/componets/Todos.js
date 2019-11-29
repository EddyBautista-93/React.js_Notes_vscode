import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.Todos.map((todo) => (
            <Todoitem key={todo.id} Todos={todo} />
        ));
    }
}

//proptype
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;