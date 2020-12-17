import React from 'react'
import s from './AnswerList.module.css'
import AnswerItem from './AnswerItem'

const AnswerList=props=>{
  return(
    <ul className={s.AnswerList}>
      {props.answers.map((answer,index)=>{
        return(
          <AnswerItem 
            key={index}
            answer={answer}
            onAnswerClickHandler={props.onAnswerClickHandler}
            state={props.state ? props.state[answer.id] :null}
          />
        )
      })}
    </ul>
  )
}

export default AnswerList