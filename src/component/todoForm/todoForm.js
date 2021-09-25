/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { PostData } from '../../redux/action/todoAction';

const todoForm = () => {
  const [title, setTitle] = useState('');
  const [created_by, setCreatedby] = useState('');

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeCreatedby = (e) => setCreatedby(e.target.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h4>title</h4>
      <input type="text" onChange={(e) => handleChangeTitle(e)} value={title} placeholder="todo" />
      <h4>Created By</h4>
      <input type="text" onChange={(e) => handleChangeCreatedby(e)} value={created_by} placeholder="created by" />
      <button
        type="submit"
        onClick={() => {
          dispatch(PostData({ title, created_by }));
        }}
      >
        + todo
      </button>
    </div>

  );
};

export default todoForm;
