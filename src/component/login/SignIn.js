/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Registeration, SignIn } from '../../redux/action/todoAction';
import styles from './SignIn.module.css';

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.RegisterationReducer);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePasswordConfirmation = (e) => setPasswordConfirmation(e.target.value);
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

  const login = (e) => {
    e.preventDefault();
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  };

  const register = (e) => {
    e.preventDefault();
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'flex';
    document.getElementById('register').style.flexDirection = 'column';
    document.getElementById('register').style.alignItems = 'center';
  };

  return (
    <div>
      <div id="login" className={styles.login}>
        <div className={styles.input}>
          <h4>email</h4>
          <input type="email" onChange={(e) => handleChangeEmail(e)} value={email} placeholder="example@gmail.com" className={styles.inpt} />
        </div>
        <div className={styles.input}>
          <h4>password</h4>
          <input type="password" onChange={(e) => handleChangePassword(e)} value={password} className={styles.inpt} />
        </div>
        <div className={styles.button}>
          <button
            type="submit"
            onClick={() => {
              dispatch(SignIn({ email, password }));
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={(e) => register(e)}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div id="register" className={styles.register}>
        <div className={styles.input}>
          <h4>email</h4>
          <input type="email" onChange={(e) => handleChangeEmail(e)} value={email} placeholder="example@gmail.com" className={styles.inpt} />
        </div>
        <div className={styles.input}>
          <h4>password</h4>
          <input type="password" onChange={(e) => handleChangePassword(e)} value={password} className={styles.inpt} />
        </div>
        <div className={styles.input}>
          <h4>confirm psw</h4>
          <input type="password" onChange={(e) => handleChangePasswordConfirmation(e)} value={password_confirmation} className={styles.inpt} />
        </div>
        <div className={styles.button}>
          <button
            type="submit"
            onClick={() => {
              dispatch(Registeration({ email, password, password_confirmation }));
            }}
          >
            Register
          </button>
          <button
            type="button"
            onClick={(e) => login(e)}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
