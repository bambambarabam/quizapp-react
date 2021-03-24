import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader'
import './QuizList.css';

class QuizList extends Component {
    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                    className='quiz-list__item'>
                    <NavLink to={'/quiz/' + quiz.id} className='quiz-list__link'>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className='quiz-list'>
                <div>
                    <h1 className='quiz-list__header'>Список тестов</h1>
                    {this.state.loading
                        ? <Loader />
                        :
                        <ul className='quiz-list__list'>
                            {this.renderQuizes()}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

export default QuizList;