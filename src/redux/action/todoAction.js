import axios from 'axios';
import ActionTypes from './action_types';

const FetchData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FetchLoading,
  });

  try {
    const response = await axios.get('https://secure-ocean-64470.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxM30.d2uekGOXSDVgfqjon8T-QFHhfFGLAz3eE9nH3WpgldY',
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
  dispatch({
    type: ActionTypes.CreateTodo,
  });

  try {
    const response = await axios.post('https://secure-ocean-64470.herokuapp.com/api/v1/todos', data,
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxM30.d2uekGOXSDVgfqjon8T-QFHhfFGLAz3eE9nH3WpgldY',
        },
      });
    dispatch({
      type: ActionTypes.PostSuccess,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.PostFailure,
      error,
    });
  }
};

export { FetchData, PostData };
