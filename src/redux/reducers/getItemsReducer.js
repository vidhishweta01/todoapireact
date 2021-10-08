import ActionTypes from '../action/action_types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const GetItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: [...action.payload],
        loading: false,
      };
    case ActionTypes.GET_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default GetItemsReducer;
