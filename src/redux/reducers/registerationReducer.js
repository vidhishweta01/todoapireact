import ActionTypes from '../action/action_types';

const initialStateRegisteration = {
  items: [],
  loading: false,
  error: null,
};

const RegisterationReducer = (state = initialStateRegisteration, action) => {
  switch (action.type) {
    case ActionTypes.RegisterationLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.RegisterationSuccess:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ActionTypes.RegisterationFailure:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};

export default RegisterationReducer;