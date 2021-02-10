import React, { Component } from 'react';
import './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    requred: true,
                    email: true
                }

            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    requred: true,
                    minLength: 6
                }
            }
        }
    }

    submitHandler = evt => {
        evt.preventDefault()
    }

    loginHandler = () => {

    }

    regHandler = () => {

    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true
        if (validation.requred) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    onChangeHandler = (evt, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = evt.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;
        this.setState({
            formControls
        })
    }


    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={evt => this.onChangeHandler(evt, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className='auth'>
                <div className='auth__container'>
                    <h1 className='auth__header'>Авторизация</h1>
                    <form
                        className='auth__form'
                        onSubmit={this.submitHandler}>
                        {
                            this.renderInputs()
                        }
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