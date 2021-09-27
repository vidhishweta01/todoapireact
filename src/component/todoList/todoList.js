import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/action/todoAction';
import Todo from '../todo';
import todoForm from '../todoForm/todoForm';

const todosList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoReducer);

  useEffect(() => {
    dispatch(FetchData());
  }, []);

  useEffect(() => {
  }, [state]);

  const renderTodoList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (state.items.length > 0) {
      const todos = state.items;
      return (todos.map((todo) => <Todo key={todo.id} todo={todo} />));
    }
    return <h1>cannot get list try again</h1>;
  };
  return (
    <div>
      {todoForm()}
      {renderTodoList()}
    </div>
  );
};

export default todosList;
