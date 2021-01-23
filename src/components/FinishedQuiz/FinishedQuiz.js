import React from 'react';
import './FinishedQuiz.css';
import Button from '../UI/Button/Button';

const FinishedQuiz = ({ quiz, results, onRetry }) => {
    const successCount = Object.keys(results).reduce((total, key) => {
        if (results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div className='finished-quiz'>
            <ul className='finished-quiz__list'>
                {
                    quiz.map((quizItem, index) => {
                        const cls = [
                            results[quizItem.id] === 'error' ? '🔴' : '🟢'
                        ]
                        return (
                            <li
                                className='finished-quiz__list'
                                key={index}>
                                <strong>{index + 1}</strong>. &nbsp;
                                {quizItem.question}
                                <i className='finished-quiz__icon'>{cls}</i>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Правильно {successCount} из {quiz.length}
            </p>
            <div>
                <Button
                    onClick={onRetry}
                    type='primary'>Повторить</Button>
                <Button
                    type='success'>
                    Перейти к списку</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;