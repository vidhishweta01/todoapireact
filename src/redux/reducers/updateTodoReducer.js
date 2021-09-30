import ActionTypes from '../action/action_types';

const initialStatePost = {
  message: null,
  loading: false,
  error: null,
};

const UpdateTodoReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case ActionTypes.UpdateTodoLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.UpdateTodoSuccess:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case ActionTypes.UpdateTodoFailure:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default UpdateTodoReducer;
