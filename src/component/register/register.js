/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticateUser } from '../../helper/helper';
import { Registeration } from '../../redux/action/todoAction';
import styles from './register.module.css';

const Register = () => {
  localStorage.clear();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePasswordConfirmation = (e) => setPasswordConfirmation(e.target.value);

  const TrySignIn = (e) => {
    e.preventDefault();
    dispatch(Registeration({ email, password, password_confirmation })).then(() => {
      const res = authenticateUser();
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
        return res.map((error) => {
          const div = document.createElement('div');
          div.textContent = error;
          div.classList.add(`${styles.error}`);
          errorsContainer.append(div);
          return true;
        });
      }
      return true;
    });
  };

  const login = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <div id="register" className={styles.register}>
      <div id="error" />
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
          onClick={(e) => TrySignIn(e)}
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
