import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const initialForm = {
        name: 'Arturo',
        email: 'artuedu02051997@hotmail.com',
        password: '123456',
        password2: '123456'
    };

    const [ formValues, handleInputChange ] = useForm(initialForm);

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password !== password2 || password.length < 5){
            dispatch(setError('Password should be at least 6 characters and match each other'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
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
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Name"
                    type="text"
                    value={name}
                />
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
                <input
                    className="auth_input"
                    name="password2"
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    type="password"
                    value={password2}
                />
                <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>
                <Link className="link" to="/auth/login">Alredy registered?</Link>
            </form>
        </>
    )
}
