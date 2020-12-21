import React from 'react'
import s from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'

export default class QuizCreator extends React.Component{

  submitHandler=event=>{
    event.preventDefault()
  }

  addQuestionHandler=()=>{

  }

  createQuizHandler=()=>{

  }

  render(){
    return(
      <div className={s.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
            <form onSubmit={this.submitHandler}>
              <input type="text"/>
                  <hr/>
                  <input type="text"/>
                  <input type="text"/>
                  <input type="text"/>
                  <input type="text"/>
              <select>
                  <option>Пункт 1</option>
                  <option>Пункт 2</option>
              </select>
                <Button type="primary" onClick={this.addQuestionHandler}>Добавить вопрос</Button>
                <Button type="success" onClick={this.createQuizHandler}>Создать тест</Button>
            </form>
        </div>
      </div>
    )
  }
}