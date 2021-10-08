import ActionTypes from '../action/action_types';

const initialStatePost = {
  items: [],
  loading: false,
  error: null,
};

const PostTodoReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case ActionTypes.POST_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.POST_TODO_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ActionTypes.POST_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};

export default PostTodoReducer;
