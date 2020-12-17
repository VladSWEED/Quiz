import react from 'react'
import s from './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz=(props)=>{
  return(
  <div className={s.ActiveQuiz}>
    <p className={s.Question}>
      <span>
        <strong>2</strong>&nbsp;
        {props.question}
      </span>
      <small>4 из 12</small>
    </p>
    <AnswerList answers={props.answers} 
    onAnswerClickHandler={props.onAnswerClickHandler} />

  </div>
  )
}

export default ActiveQuiz