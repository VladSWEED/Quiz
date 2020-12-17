import React from 'react'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component{
  state={
    quiz:[]
  }
  render(){
    return(
      <div className={s.Quiz}>
        <div className={s.QuizWrapper}>
        <h1>Quiz</h1>
          <ActiveQuiz/>
        </div>
      </div>
    )
  }
}

export default Quiz