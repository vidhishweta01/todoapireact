import ActionTypes from '../action/action_types';
import initialState from '../store/initial_state';

const PostDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CreateTodo:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ActionTypes.PostFailure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.PostSuccess:
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: '',
      };
    default: return state;
  }
};

export default PostDataReducer;