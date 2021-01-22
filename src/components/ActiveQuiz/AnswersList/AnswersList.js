import React from 'react';
import './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

function AnswersList({ answers, onAnswerClick, state }) {
    return (
        <ul className='answers-list'>
            {answers.map((answer, index) =>
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={onAnswerClick}
                    state={state ? state[answer.id] : null}
                />
            )}
        </ul>
    )
}

export default AnswersList;