import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Registeration, SignIn } from '../../redux/action/todoAction';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const dispatch = useDispatch();

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangePasswordConfirmation = (e) => setPasswordConfirmation(e.target.value);
    const login = (e) => {
        e.preventDefault();
        getElementById('register').style.display = 'none';
        getElementById('login').style.display = 'block';
    }

    const register = (e) => {
        e.preventDefault();
        getElementById('login').style.display = 'none';
        getElementById('register').style.display = 'block';
    }

    return (
        <div>
            <div id="login">
                <label>email</label>
                <input type="email" onChange={(e) => handleChangeEmail(e)} value={email} placeholder="example@gmail.com" />
                <label>password</label>
                <input type="password" onchange={(e) => handleChangePassword(e)} value={password} />
                <button type="submit"
                    onClick={() => {
                    dispatch(SignIn({ email, password }))
                }}>Sign In</button>
                <button type="button"
                    onClick={(e) => register(e)}>Sign Up</button>
            </div>
            <div id="register">
            <label>email</label>
                <input type="email" onChange={(e) => handleChangeEmail(e)} value={email} placeholder="example@gmail.com" />
                <label>password</label>
                <input type="password" onchange={(e) => handleChangePassword(e)} value={password} />
                <label>password</label>
                <input type="password" onchange={(e) => handleChangePasswordConfirmation(e)} value={password_confirmation} />
                <button type="submit"
                    onClick={() => {
                    dispatch(Registeration({ email, password, password_confirmation }))
                }}>Register</button>
                <button type="button"
                    onClick={(e) => login(e)}
                >Sign In</button>
            </div>
        </div>
    )

}

export default SignIn;