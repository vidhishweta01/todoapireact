import axios from 'axios';
import ActionTypes from './action_types';

const FetchData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FetchLoading,
  });

  try {
    const response = await axios.get('https://boiling-shelf-13431.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
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

const PostData = () => async (dispatch) => {
  dispatch({ type: ActionTypes.PostTodoLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://boiling-shelf-13431.herokuapp.com/api/v1/todos',
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
      data: { title: 'testpost33', created_by: 'testpost22', user_id: 1 },
    });
    dispatch({ type: ActionTypes.POST_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_TODO_FAILURE, error });
  }
};

const Registeration = () => async (dispatch) => {
  dispatch({ type: ActionTypes.RegisterationLoading });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://boiling-shelf-13431.herokuapp.com/api/v1/registeration',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { email: 'vidhishweta01@gmail.com', password: 'Shaurya123*', password_confirmation: 'Shaurya123*' }
    });
    dispatch({ type: ActionTypes.RegisterationSuccess, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_TODO_FAILURE, error });
  }
};

export { FetchData, PostData };
