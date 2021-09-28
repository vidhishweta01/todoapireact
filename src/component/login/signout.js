import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../redux/action/todoAction';

const SignOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutUser = () => {
    dispatch(signOut());
    history.push('/');
  };

  return (
    <div>
      <button type="submit" onClick={() => signOutUser()}>Sign Out</button>
    </div>
  );
};

export default SignOut;
