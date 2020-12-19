import React from 'react'
import s from './AnswerItem.module.css'

const AnswerItem=props=>{
  const cls=[s.AnswerItem]

  if(props.state){
    cls.push(s[props.state])
  }
  return(
    <li 
      className={cls.join(' ')}
      onClick={()=>props.onAnswerClickHandler(props.answer.id)}>
        {props.answer.text}

    </li>
  )
}

export default AnswerItem