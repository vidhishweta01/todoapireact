/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/action/todoAction';
import Todo from '../todo';
import TodoForm from '../todoForm/todoForm';

const todosList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    RegisterationReducer, todoReducer, PostTodoReducer, DeleteTodoReducer,
  } = state;

  useEffect(() => {
    dispatch(FetchData());
  }, [RegisterationReducer, PostTodoReducer, DeleteTodoReducer]);

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
      <TodoForm />
      {renderTodoList()}
    </div>
  );
};

export default todosList;
