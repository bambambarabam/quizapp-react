import React, { Component } from 'react';
import './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import { createControl } from '../../form/formFramework';
import Input from '../../components/UI/Input/Input';

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, { required: true }
    )
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }
    submitHandler = evt => {
        evt.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={evt => this.changeHandler(evt.target.value, controlName)}
                    />
                    {
                        index === 0 ? <hr /> : null
                    }
                </>
            )
        })
    }
    render() {
        return (
            <div className='quiz-creator'>
                <div className='quiz-creator__container'>
                    <h1 className='quiz-creator__header'>Создание теста</h1>
                    <form
                        className='quiz-creator__form'
                        onSubmit={this.submitHandler}>
                        {
                            this.renderInputs()
                        }

                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >Добавить вопрос
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >Создать тест
                        </Button>

                    </form>
                </div>
            </div>

        )
    }
}

export default QuizCreator;