import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader'
import './QuizList.css';
import { connect } from 'react-redux';
import fetchQuizes from '../../redux/actions/quiz';

class QuizList extends Component {

    renderQuizes() {
        return this.props.quizes.map(quiz => {
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

     componentDidMount() {
         this.props.fetchQuizes() 
    }

    render() {
        return (
            <div className='quiz-list'>
                <div>
                    <h1 className='quiz-list__header'>Список тестов</h1>
                    {this.props.loading && this.props.quizes !== 0
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

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizList);