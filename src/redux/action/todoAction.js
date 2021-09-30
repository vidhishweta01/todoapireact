import axios from 'axios';
import ActionTypes from './action_types';

const token = localStorage.getItem('token');
const Registeration = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.RegisterationLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/registeration',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    dispatch({ type: ActionTypes.RegisterationSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_TODO_FAILURE, error });
  }
};

const SignIn = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.RegisterationLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    dispatch({ type: ActionTypes.RegisterationSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_TODO_FAILURE, error });
  }
};

const signOut = () => (
  {
    type: ActionTypes.SignOut,
    value: null,
  }
);

const FetchData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FetchLoading,
  });

  try {
    const response = await axios.get('https://vast-eyrie-23535.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token,
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
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/todos',
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
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}`,
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
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}`,
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

const GetItems = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GetItemsLoading });

  try {
    const response = await axios({
      method: 'get',
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}/items`,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });
    dispatch({ type: ActionTypes.GetItemsSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.GetItemsFailure, error });
  }
};

export const PostItems = (id, obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.POST_ITEMS_LOADING });

  try {
    const response = await axios({
      method: 'post',
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}/items`,
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
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${todoId}/items/${itemId}`,
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
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${todoId}/items/${itemId}`,
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
  Registeration, SignIn, signOut, FetchData, PostData, UpdateTodo, DeleteTodo, GetItems,
};
