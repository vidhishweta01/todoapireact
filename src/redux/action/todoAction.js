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
    dispatch({ type: ActionTypes.RegisterationFailure, error: error.response.data.error });
  }
};

const SignIn = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.SignInLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/login',
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

const FetchData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FetchLoading,
  });
  console.log(token); // eslint-disable-line
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
      url: `https://vast-eyrie-23535.herokuapp.com/v1/todos/${id}`,
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

export {
  Registeration, SignIn, signOut, FetchData, PostData, UpdateTodo, DeleteTodo,
};
