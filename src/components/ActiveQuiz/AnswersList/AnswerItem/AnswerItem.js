import React from 'react';
import './AnswerItem.css';

function AnswerItem({ answer, onAnswerClick }) {
    return (
        <li className='answer-item'
            onClick={(() => onAnswerClick(answer.id))}
        >
            {answer.text}

        </li>
    )
}

export default AnswerItem;