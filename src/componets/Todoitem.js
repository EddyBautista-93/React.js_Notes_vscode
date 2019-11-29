import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.Todos.title }</p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.array.isRequired
}
export default Todoitem
