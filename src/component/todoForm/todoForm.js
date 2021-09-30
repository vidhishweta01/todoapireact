/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostData } from '../../redux/action/todoAction';
import styles from './todoForm.module.css';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, SetTitle] = useState('');
  const [created_by, SetcreatedBy] = useState('');
  const user_id = localStorage.getItem('user_id');
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(PostData({ title, created_by, user_id }));
          SetTitle('');
          SetcreatedBy('');
        }}
        className={styles.form}
      >
        <input className={styles.input} type="text" placeholder="Todo Title" value={title} onChange={(e) => SetTitle(e.target.value)} />
        <input className={styles.input} type="text" placeholder="Created by" value={created_by} onChange={(e) => SetcreatedBy(e.target.value)} />
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
