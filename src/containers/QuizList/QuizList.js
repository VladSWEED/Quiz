import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './QuizList.module.css'
import axios from 'axios'

export default class QuizList extends React.Component{

  renderQuizes(){
    return[1,2,3].map((quiz,index)=>{
      return(
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Tecт {quiz}
          </NavLink>

           </li>
      )
    })
  }

  componentDidMount(){
    axios.get('https://react-quiz-72779-default-rtdb.firebaseio.com/quiz.json').then(response=>{
      console.log(response)
    })
  }

  render(){
    return(
      <div className={s.QuizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    )
  }
}