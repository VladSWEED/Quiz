import react from 'react'
import s from './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz=(props)=>{
  return(
  <div className={s.ActiveQuiz}>
    <p className={s.Question}>
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>
    <AnswerList 
    answers={props.answers} 
    onAnswerClickHandler={props.onAnswerClickHandler}
    state={props.state}
    />

  </div>
  )
}

export default ActiveQuiz