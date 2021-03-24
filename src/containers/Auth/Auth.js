import React from 'react';
import './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

function Auth({ value }) {

    const emailField = useForm();
    const passwordField = useForm();

    const isDisabled = !(emailField.isValid && passwordField.isValid)

    function submitHandler(evt) {
        evt.preventDefault();
    }

    const loginHandler = async () => {
        const authData = {
            email: emailField.value,
            password: passwordField.value,
            returnSecureToken: true
        }
        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDmgPDKX6iN6wA5ZWdSrbnmqYl6kxyob0', authData)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }


    const regHandler = async () => {
        const authData = {
            email: emailField.value,
            password: passwordField.value,
            returnSecureToken: true
        }
        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDmgPDKX6iN6wA5ZWdSrbnmqYl6kxyob0', authData)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='auth'>
            <div className='auth__container'>
                <h1 className='auth__header'>Авторизация</h1>
                <form
                    className='auth__form'
                    onSubmit={submitHandler}
                >
                    <Input
                        type='email'
                        value={value}
                        label='email'
                        minLength='6'
                        maxLength='30'
                        autocomplete='email'
                        {...emailField}
                        required={true}
                    />
                    <Input
                        type='password'
                        value={value}
                        label='Пароль'
                        minLength='8'
                        maxLength='30'
                        autocomplete='password'
                        {...passwordField}
                        required={true}
                    />
                    <Button
                        type='success'
                        onClick={loginHandler}
                        disabled={isDisabled}
                    >
                        Войти
                    </Button>
                    <Button
                        type='primary'
                        onClick={regHandler}
                        disabled={isDisabled}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Auth;