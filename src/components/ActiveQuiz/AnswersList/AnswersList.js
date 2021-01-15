import React from 'react';
import './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

function AnswersList({ answers, onAnswerClick }) {
    return (
        <ul className='answers-list'>
            {answers.map((answer, index) =>
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={onAnswerClick}
                />
            )}
        </ul>
    )
}

export default AnswersList;