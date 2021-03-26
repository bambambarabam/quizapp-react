import axios from '../../axios/axios-quiz';
import {
    FETCH_QUIZES_ERR,
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZ_SUCCESS,
    QUIZ_SET_STATE,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY
} from './actionTypes';



export default function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            dispatch(fetchQuizesSuccess(quizes))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizById(id) {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get(`/quizes/${id}.json`);
            const quiz = response.data;
            dispatch(fetchQuizSuccess(quiz))
        } catch (e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizesError(e) {
    return {
        type: FETCH_QUIZES_ERR,
        error: e
    }
}

export function quizSetState(answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState, results
    }

}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    }
}

export function quizNextQuestion(num) {
    return {
        type: QUIZ_NEXT_QUESTION,
        num
    }
}

export function retryQuiz() {
    return {
        type: QUIZ_RETRY
    }
}

function isQuizFinished(state) {
    // eslint-disable-next-line eqeqeq
    return state.currentQuestion + 1 == state.quiz.length
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz
        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = state.quiz[state.currentQuestion]
        const results = state.results
        // eslint-disable-next-line eqeqeq
        if (question.rightAnswerId == answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            dispatch(quizSetState({ [answerId]: 'success' }, results))

            const timeout = window.setTimeout(() => {
                if (isQuizFinished(state)) {
                    dispatch(finishQuiz())
                } else {
                    dispatch(quizNextQuestion(state.currentQuestion + 1))
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            dispatch(quizSetState({ [answerId]: 'error' }, results))
        }
    }
}