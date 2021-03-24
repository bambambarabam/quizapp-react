import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        results: {},
        isFinished: false,
        answerState: null,
        quiz: [],
        loading: true
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
        // eslint-disable-next-line eqeqeq
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

    async componentDidMount() {
        try {
            const res = await axios.get(`/quizes/${this.props.match.params.id}.json`);
            const quiz = res.data;
            this.setState({
                quiz,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className='quiz' >
                <div className='quiz__wrapper'>
                    <h1 className='quiz__header'>Ответьте на все вопросы</h1>
                    {
                        this.state.loading
                            ? <Loader />
                            :
                            this.state.isFinished
                                ?
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