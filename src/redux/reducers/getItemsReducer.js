import ActionTypes from '../action/action_types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const GetItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GetItemsLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GetItemsSuccess:
      return {
        ...state,
        items: [...action.payload],
        loading: false,
      };
    case ActionTypes.GetItemsFailure:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default GetItemsReducer;
