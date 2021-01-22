import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        currentQuestion: 0,
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
        const question = this.state.quiz[this.state.currentQuestion]
console.log(question)
        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: { [answerId]: 'success' }
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('finished')
                } else {
                    this.setState({
                        currentQuestion: this.state.currentQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            this.setState({
                answerState: { [answerId]: 'error' }
            })
        }
    }

    isQuizFinished() {
        return this.state.currentQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className='quiz' >
                <h1 className='quiz__header'>Ответьте на все вопросы</h1>
                <div className='quiz__wrapper'>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.currentQuestion].answers}
                        question={this.state.quiz[this.state.currentQuestion].question}
                        onAnswerClick={this.onAnswerHandler}
                        quizLength={this.state.quiz.length}
                        currentAnswer={this.state.currentQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;