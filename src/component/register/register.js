/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Registeration } from '../../redux/action/todoAction';
import styles from './register.module.css';

const Register = () => {
  localStorage.removeItem('token');
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
    history.push('/');
  };

  return (
    <div id="register" className={styles.register}>
      <div className={styles.input}>
        <input type="email" onChange={(e) => handleChangeEmail(e)} value={email} placeholder="EMAIL" className={styles.inpt} />
      </div>
      <div className={styles.input}>
        <input type="password" onChange={(e) => handleChangePassword(e)} value={password} placeholder="PASSWORD" className={styles.inpt} />
      </div>
      <div className={styles.input}>
        <input type="password" onChange={(e) => handleChangePasswordConfirmation(e)} value={password_confirmation} placeholder="CONFIRM PASSWORD" className={styles.inpt} />
      </div>
      <div className={styles.button}>
        <button
          className={styles.btn}
          type="submit"
          onClick={() => {
            dispatch(Registeration({ email, password, password_confirmation }));
          }}
        >
          Register
        </button>
        <button
          className={styles.btn}
          type="button"
          onClick={(e) => login(e)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
