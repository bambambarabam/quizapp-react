import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './QuizList.css';

class QuizList extends Component {

    renderQuizes() {
        return [1,2,3].map((quiz, index) => {
            return(
                <li
                key={index}
                className='quiz-list__item'>
                    <NavLink to={'/quiz/' + quiz} className='quiz-list__link'>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        return (
            <div className='quiz-list'>
                <div>
                    <h1 className='quiz-list__header'>Список тестов</h1>
                    <ul className='quiz-list__list'>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default QuizList;