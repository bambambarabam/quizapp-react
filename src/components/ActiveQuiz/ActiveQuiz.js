import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

function ActiveQuiz({ answers, question, onAnswerClick, quizLength, currentAnswer, state }) {
    return (
        <div className='active-quiz'>
            <p className='question'>
                <span>
                    <strong>
                        {currentAnswer}.
                    </strong>&nbsp;
                    {question}
                </span>
                <small>{currentAnswer} из {quizLength}</small>
            </p>
            <AnswersList
                state={state}
                answers={answers}
                onAnswerClick={onAnswerClick}
            />
        </div>
    )
}

export default ActiveQuiz;