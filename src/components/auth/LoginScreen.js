import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {msgError, loading} = useSelector(state => state.ui);

    const initialForm = {
        email: 'artuedu02051997@hotmail.com',
        password: '123456'
    };
    
    const [ formValues, handleInputChange ] = useForm(initialForm);

    const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const isFormValid = () => {
        if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password.length < 5){
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <input
                    autoComplete="off"
                    className="auth_input"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="Email"
                    type="text"
                    value={email}
                />
                <input
                    className="auth_input"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="Password"
                    type="password"
                    value={password}
                />
                <button className="btn btn-primary btn-block" type="submit" disabled={loading}>Login</button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">Create new account</Link>
            </form>
        </>
    )
}
