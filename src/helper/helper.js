/* eslint-disable no-console */
/* eslint-disable camelcase */
import jwt_decode from 'jwt-decode';
import store from '../redux/store/store';

export const authenticateUser = () => {
  const { RegisterationReducer } = store.getState();
  if (RegisterationReducer.items) {
    const { token } = RegisterationReducer.items;
    if (token) {
      const { user_id } = jwt_decode(token);
      localStorage.setItem('token', token);
      return user_id;
    }
  }
  const { error } = RegisterationReducer;
  return error;
};

export const IsSignedIn = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const { user_id } = jwt_decode(token);
    return user_id;
  }
  return 'unauthorized action please sign in first!';
};
