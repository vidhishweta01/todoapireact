import ActionTypes from '../action/action_types';

const initialState = {
  message: {},
  loading: false,
  error: null,
};

const DeleteItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.DELETE_ITEMS_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case ActionTypes.DELETE_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default DeleteItemsReducer;