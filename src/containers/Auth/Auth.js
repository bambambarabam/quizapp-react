import React, { Component } from 'react';
import './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {

    submitHandler = evt => {
        evt.preventDefault()
    }

    loginHandler = () => {

    }

    regHandler = () => {

    }

    render() {

        return (
            <div className='auth'>
                <div className='auth__container'>
                    <h1 className='auth__header'>Авторизация</h1>
                    <form
                        className='auth__form'
                        onSubmit={this.submitHandler}>
                        <Input
                            label='email' />
                        <Input
                            label='password' 
                            errorMessage='Test'/>
                        <Button
                            type='success'
                            onClick={this.loginHandler}
                        >
                            Войти
                            </Button>
                        <Button
                            type='register'
                            onClick={this.regHandler}
                        >
                            Зарегистрироваться
                            </Button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Auth;