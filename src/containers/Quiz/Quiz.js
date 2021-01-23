import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        results: {},
        isFinished: false,
        answerState: null, // {[id]: 'success'/ 'error'}
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: '2',
                answers: [
                    { text: 'Зеленый', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Черный', id: 3 },
                    { text: 'Белый', id: 4 }
                ]
            },
            {
                id: 2,
                question: 'Какого цвета вода?',
                rightAnswerId: '4',
                answers: [
                    { text: 'Зеленый', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Черный', id: 3 },
                    { text: 'Белый', id: 4 }
                ]
            }
        ]
    }

    onAnswerHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.currentQuestion]
        const results = this.state.results
        if (question.rightAnswerId == answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        currentQuestion: this.state.currentQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.currentQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            currentQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className='quiz' >
                <div className='quiz__wrapper'>
                    <h1 className='quiz__header'>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.currentQuestion].answers}
                                question={this.state.quiz[this.state.currentQuestion].question}
                                onAnswerClick={this.onAnswerHandler}
                                quizLength={this.state.quiz.length}
                                currentAnswer={this.state.currentQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;