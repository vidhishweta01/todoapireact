import React from 'react';
import propTypes from 'prop-types';

const Todo = (todo) => {
    const { title, created_by } = todo;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{created_by}</h2>
        </div>
    );
};

Todo.propTypes = {
    todo: propTypes.shape({
        title: propTypes.string.isRequired,
        url: propTypes.string.isRequired,
    }).isRequired,
};

export default Todo;
