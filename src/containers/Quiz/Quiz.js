import React, { Component } from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { fetchQuizById, quizAnswerClick, retryQuiz } from '../../redux/actions/quiz';

class Quiz extends Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.retryQuiz()
    }

    render() {
        return (
            <div className='quiz' >
                <div className='quiz__wrapper'>
                    <h1 className='quiz__header'>Ответьте на все вопросы</h1>
                    {
                        this.props.loading || !this.props.quiz
                            ? <Loader />
                            :
                            this.props.isFinished
                                ?
                                <FinishedQuiz
                                    results={this.props.results}
                                    quiz={this.props.quiz}
                                    onRetry={this.props.retryQuiz}
                                />
                                :
                                <ActiveQuiz
                                    answers={this.props.quiz[this.props.currentQuestion].answers}
                                    question={this.props.quiz[this.props.currentQuestion].question}
                                    onAnswerClick={this.props.quizAnswerClick}
                                    quizLength={this.props.quiz.length}
                                    currentAnswer={this.props.currentQuestion + 1}
                                    state={this.props.answerState}
                                />
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        currentQuestion: state.quiz.currentQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);