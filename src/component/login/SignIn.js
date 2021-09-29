/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { SignIn } from '../../redux/action/todoAction';
import styles from './SignIn.module.css';

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.RegisterationReducer);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  useEffect(() => {
    if (state.items) {
      const { token } = state.items;
      localStorage.setItem('token', token);
      if (token) {
        const { user_id } = jwt_decode(token);
        localStorage.setItem('user_id', user_id);
        history.push(`/todos/${user_id}`);
      }
    }
  }, [state]);

  const register = (e) => {
    e.preventDefault();
    history.push('/register');
  };

  return (
    <div className={styles.loginForm}>
      <div id="login" className={styles.login}>
        <div className={styles.input}>
          <h4 className={`${styles.h4} ${styles.h42}`}>EMAIL   </h4>
          <input type="email" onChange={(e) => handleChangeEmail(e)} value={email} placeholder="example@gmail.com" className={styles.inpt} />
        </div>
        <div className={styles.input}>
          <h4 className={styles.h4}>PASSWORD</h4>
          <input type="password" onChange={(e) => handleChangePassword(e)} value={password} className={styles.inpt} />
        </div>
        <div className={styles.button}>
          <button
            className={styles.btn}
            type="submit"
            onClick={() => {
              dispatch(SignIn({ email, password }));
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={(e) => register(e)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
