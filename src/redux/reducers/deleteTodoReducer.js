import ActionTypes from '../action/action_types';

const initialStatePost = {
  message: null,
  loading: false,
  error: null,
};

const DeleteTodoReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case ActionTypes.DeleteTodoLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.DeleteTodoSuccess:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case ActionTypes.DeleteTodoFailure:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default DeleteTodoReducer;
