/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SignIn } from '../../redux/action/todoAction';
import { authenticateUser } from '../../helper/helper';
import styles from './SignIn.module.css';

const Signin = () => {
  localStorage.removeItem('token');
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const TrySignIn = (e) => {
    e.preventDefault();
    dispatch(SignIn({ email, password })).then(() => {
      const res = authenticateUser();
      console.log(res); // eslint-disable-line
      if (Number.isInteger(res)) {
        history.push(`/user/${res}/todos`);
      } else {
        const errorsContainer = document.getElementById('error');
        const btn = document.createElement('button');
        btn.innerHTML = 'X';
        btn.classList.add(`${styles.errorBtn}`);
        btn.addEventListener('click', (e) => {
          e.target.parentElement.textContent = '';
        });
        errorsContainer.append(btn);
        const div = document.createElement('div');
        div.textContent = res;
        errorsContainer.append(div);
      }
      return true;
    });
  };

  const register = (e) => {
    e.preventDefault();
    history.push('/register');
  };

  return (
    <div className={styles.loginForm}>
      <div id="error" />
      <div id="login" className={styles.login}>
        <div className={styles.input}>
          <input type="email" onChange={(e) => handleChangeEmail(e)} value={email} placeholder="EMAIL" className={styles.inpt} />
        </div>
        <div className={styles.input}>
          <input type="password" onChange={(e) => handleChangePassword(e)} value={password} placeholder="PASSWORD" className={styles.inpt} />
        </div>
        <div className={styles.button}>
          <button
            className={styles.btn}
            type="submit"
            onClick={(e) => TrySignIn(e)}
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
