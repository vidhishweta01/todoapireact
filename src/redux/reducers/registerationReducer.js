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
    case ActionTypes.SignInLoading:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SignInSuccess:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ActionTypes.SignInFailure:
      return {
        ...state,
        error: action.error,
      };

    case ActionTypes.SignOut:
      localStorage.removeItem('token');
      return {
        ...state,
        items: action.value,
      };

    default: return state;
  }
};

export default RegisterationReducer;
