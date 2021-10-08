import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signOut } from '../../redux/action/todoAction';
import styles from './signOut.module.css';

const SignOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutUser = () => {
    dispatch(signOut());
    history.push('/');
  };

  return (
    <button className={styles.button} type="submit" onClick={() => signOutUser()}>SIGN OUT</button>
  );
};

export default SignOut;
