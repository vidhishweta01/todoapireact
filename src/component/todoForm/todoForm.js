/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostData } from '../../redux/action/todoAction';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [created_by, setCreatedby] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeCreatedby = (e) => setCreatedby(e.target.value);
  const user_id = localStorage.getItem('user_id');
  return (
    <div>
      <h4>title</h4>
      <input type="text" onChange={(e) => handleChangeTitle(e)} value={title} placeholder="todo" />
      <h4>Created By</h4>
      <input type="text" onChange={(e) => handleChangeCreatedby(e)} value={created_by} placeholder="created by" />
      <button
        type="submit"
        onClick={() => {
          dispatch(PostData({ title, created_by, user_id }));
        }}
      >
        + todo
      </button>
    </div>

  );
};

export default TodoForm;
