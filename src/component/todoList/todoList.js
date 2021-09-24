import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/action/todoAction';
import Todo from '../todo';

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
    return <h1>cannot get pokemon list try again</h1>;
  };
  return (<div>{renderTodoList()}</div>);
};

export default todosList;
