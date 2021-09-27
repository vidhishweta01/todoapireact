import axios from 'axios';
import ActionTypes from './action_types';

const Registeration = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.RegisterationLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/registeration',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { email: 'kartik19@gmail.com', password: 'Shaurya123*', password_confirmation: 'Shaurya123*' },
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

const SignOut = () => (
  {
    type: ActionTypes.SignOut,
    value: null,
  }
);

const FetchData = (token) => async (dispatch) => {
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

const PostData = (data, token) => async (dispatch) => {
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

export {
  Registeration, SignIn, SignOut, FetchData, PostData,
};
