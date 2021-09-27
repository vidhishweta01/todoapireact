/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostData } from '../../redux/action/todoAction';
import SignIn from '../../component/login/SignIn';

const todoForm = () => {
  const [title, setTitle] = useState('');
  const [created_by, setCreatedby] = useState('');
  const dispatch = useDispatch();
  
  const state = useSelector((state) => state.RegisterationReducer);
  
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeCreatedby = (e) => setCreatedby(e.target.value);

  return (
    <div>
      <h4>title</h4>
      <input type="text" onChange={(e) => handleChangeTitle(e)} value={title} placeholder="todo" />
      <h4>Created By</h4>
      <input type="text" onChange={(e) => handleChangeCreatedby(e)} value={created_by} placeholder="created by" />
      <button
        type="submit"
        onClick={() => {
          if (state.items) {
            dispatch(PostData({ title, created_by }, state.items));
          } else {
            SignIn();
          } 
        }}
      >
        + todo
      </button>
    </div>

  );
};

export default todoForm;
