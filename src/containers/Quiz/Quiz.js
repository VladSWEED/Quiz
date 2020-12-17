import React from 'react'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component{
  state={
    quiz:[
      {
        question:'Какого цвета небо?',
        rightAnswerId:2,
        answers:[
          {text:'Черный',id:1},
          {text:'Синий',id:2},
          {text:'Красный',id:3},
          {text:'Зеленый',id:4}
        ]
      }
    ]
  }

  onAnswerClickHandler=(answerId)=>{
    console.log('Answer id:',answerId);
  }
  render(){
    return(
      <div className={s.Quiz}>
        <div className={s.QuizWrapper}>
        <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz 
          question={this.state.quiz[0].question}
          answers={this.state.quiz[0].answers}
          onAnswerClickHandler={this.onAnswerClickHandler}/>
        </div>
      </div>
    )
  }
}

export default Quiz