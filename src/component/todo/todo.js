/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import styles from './todo.module.css';

const Todo = (todos) => {
  const { todo } = todos;
  const { id, title, created_by } = todo;
  return (
    <div className={styles.card}>
      <div className={styles.todo}>
        <span className={styles.p}>{id}</span>
        <span className={styles.p}>{title}</span>
        <span className={styles.p}>{created_by}</span>
        <div>
          <button type="button" className={styles.button}>show</button>
          <button type="button" className={styles.button}>Delete</button>
          <button type="button" className={styles.button}>update</button>
          <button type="button" className={styles.button}> + Items</button>
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todos: propTypes.shape({
    todo: propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      created_by: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Todo;
