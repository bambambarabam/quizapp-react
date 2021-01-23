import React from 'react';
import './AnswerItem.css';

function AnswerItem({ answer, onAnswerClick, state }) {
    const cls = ['answer-item']

    if (state) {
        cls.push(state)
    }

    return (
        <li className={cls.join(' ')}
            onClick={
                (
                    () => onAnswerClick(answer.id)
                )
            }
        >
            {answer.text}
        </li >
    )
}

export default AnswerItem;