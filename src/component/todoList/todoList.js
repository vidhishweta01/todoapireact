import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/action/todoAction';

const todo = () => {
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
    

}