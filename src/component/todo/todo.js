/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { UpdateTodo, DeleteTodo } from '../../redux/action/todoAction';
import styles from './todo.module.css';

const Todo = ({ todo }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, title, created_by } = todo;
  const [Title, setTitle] = useState(title);
  const [CreatedBy, setcreatedBy] = useState(created_by);
  const EditItems = () => {
    const inputs = document.getElementsByClassName(id);
    inputs[0].disabled = false;
    inputs[1].disabled = false;
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <input className={id} value={Title} disabled onChange={(e) => setTitle(e.target.value)} />
        <input
          className={id}
          value={CreatedBy}
          disabled
          onChange={(e) => setcreatedBy(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <button type="button" onClick={() => history.push(`todo/${id}/items`)}>View</button>
        <button type="button" onClick={() => EditItems()}>Edit</button>
        <button type="button" onClick={() => dispatch(DeleteTodo(id))}>Delete</button>
        <button
          type="button"
          onClick={() => {
            const inputs = document.getElementsByClassName(id);
            inputs[0].disabled = true;
            inputs[1].disabled = true;
            dispatch(UpdateTodo(id, { id, title: Title, created_by: CreatedBy }));
          }}
        >
          Save
        </button>
      </div>

    </div>
  );
};

Todo.propTypes = {
  todo: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    created_by: propTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
