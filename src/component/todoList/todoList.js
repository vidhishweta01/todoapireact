import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/action/todoAction';
import Todo from '../todo/todo';

const todosList = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.TodoReducer);

    useEffect(() => {
        dispatch(FetchData());      
    }, []);

    useEffect(() => {
    }, [state]);

  const rendertodo = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (state.items.length > 0) {
      const todos = state.items;
      return todos.map((todo, id) => {  // eslint-disable-line
         <Todo id={id} todo={todo} />;
      });
    }
    return <h1>cannot get todos list try again</h1>;
  };
  return (<div>{rendertodo()}</div>);
};

export default todosList;
