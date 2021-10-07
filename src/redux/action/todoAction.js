import axios from 'axios';
import ActionTypes from './action_types';

let token = localStorage.getItem('token');
const Registeration = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.RegisterationLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://secure-ocean-64470.herokuapp.com/api/v1/registeration',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    dispatch({ type: ActionTypes.RegisterationSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.RegisterationFailure, error: error.response.data.error });
  }
};

const SignIn = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.SignInLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://secure-ocean-64470.herokuapp.com/api/v1/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    dispatch({ type: ActionTypes.SignInSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.SignInFailure, error: error.response.data.error });
  }
};

const signOut = () => (
  {
    type: ActionTypes.SignOut,
    value: null,
  }
);

const FetchData = (toke) => async (dispatch) => {
  token = toke;
  dispatch({
    type: ActionTypes.FetchLoading,
  });
  console.log(token); // eslint-disable-line
  try {
    const response = await axios.get('https://secure-ocean-64470.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token: toke,
        },
      });
    dispatch({
      type: ActionTypes.FetchSuccess,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FetchFailure,
      error,
    });
  }
};

const PostData = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.PostTodoLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://secure-ocean-64470.herokuapp.com/api/v1/todos',
      headers: {
        'Content-Type': 'application/json',
        token,
      },
      data,
    });
    dispatch({ type: ActionTypes.POST_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_TODO_FAILURE, error });
  }
};

const UpdateTodo = (id, obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.UpdateTodoLoading });

  try {
    const response = await axios({
      method: 'patch',
      url: `hhttps://secure-ocean-64470.herokuapp.com/api/v1/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.UpdateTodoSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.UpdateTodoFailure, error });
  }
};

const DeleteTodo = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.DeleteTodoLoading });

  try {
    const response = await axios({
      method: 'delete',
      url: `https://secure-ocean-64470.herokuapp.com/api/v1/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });
    dispatch({ type: ActionTypes.DeleteTodoSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.DeleteTodoFailure, error });
  }
};

export const GetItems = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ITEMS_LOADING });
  console.log('here');

  try {
    const response = await axios({
      method: 'get',
      url: `https://secure-ocean-64470.herokuapp.com/api/v1/todos/${id}/items`,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });
    dispatch({ type: ActionTypes.GET_ITEMS_SUCCESS, payload: response.data });
    console.log('here2');
  } catch (error) {
    dispatch({ type: ActionTypes.GET_ITEMS_FAILURE, error });
  }
};

export const PostItems = (id, obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.POST_ITEMS_LOADING });
  console.log(obj);
  try {
    const response = await axios({
      method: 'post',
      url: `https://secure-ocean-64470.herokuapp.com/api/v1/todos/${id}/items`,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.POST_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_ITEMS_FAILURE, error });
  }
};

export const UpdateItem = (todoId, itemId, obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_ITEMS_LOADING });

  try {
    const response = await axios({
      method: 'put',
      url: `https://secure-ocean-64470.herokuapp.com/api/v1/todos/${todoId}/items/${itemId}`,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.UPDATE_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.UPDATE_ITEMS_FAILURE, error });
  }
};

export const DeleteItem = (todoId, itemId) => async (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_ITEMS_LOADING });

  try {
    const response = await axios({
      method: 'delete',
      url: `https://secure-ocean-64470.herokuapp.com/api/v1/todos/${todoId}/items/${itemId}`,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });
    dispatch({ type: ActionTypes.DELETE_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_ITEMS_FAILURE, error });
  }
};

export {
  Registeration, SignIn, signOut, FetchData, PostData, UpdateTodo, DeleteTodo,
};
