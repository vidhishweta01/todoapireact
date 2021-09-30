import ActionTypes from '../action/action_types';

const initialState = {
  item: {},
  loading: false,
  error: null,
};

const UpdateItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.UPDATE_ITEMS_SUCCESS:
      return {
        ...state,
        item: action.payload,
        loading: false,
      };
    case ActionTypes.UPDATE_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default UpdateItemsReducer;
