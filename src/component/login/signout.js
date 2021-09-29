import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../redux/action/todoAction';
import styles from './signout.module.css';

const SignOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutUser = () => {
    dispatch(signOut());
    history.push('/');
  };

  return (
    <div className={styles.signOut}>
      <button type="submit" onClick={() => signOutUser()}>Sign Out</button>
    </div>
  );
};

export default SignOut;
