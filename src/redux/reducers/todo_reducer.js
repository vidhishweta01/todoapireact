import ActionTypes from "../action/action_types";
import initialState from '../store/initial_state';

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FetchLoading:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ActionTypes.FetchFailure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.FetchSuccess:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};