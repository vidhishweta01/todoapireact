/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/action/todoAction';
import todoForm from '../todoForm/todoForm';
import Todo from '../todo';
import SignOut from '../login/signout';

const todosList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { RegisterationReducer, todoReducer, PostTodoReducer } = state;

  useEffect(() => {
    dispatch(FetchData());
  }, [RegisterationReducer, PostTodoReducer]);

  const renderTodoList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (todoReducer.items.length > 0) {
      const todos = todoReducer.items;
      return (todos.map((todo) => <Todo key={todo.id} todo={todo} />));
    }
    return <h1>cannot get list try again</h1>;
  };
  return (
    <div>
      <SignOut />
      {todoForm()}
      {renderTodoList()}
    </div>
  );
};

export default todosList;
