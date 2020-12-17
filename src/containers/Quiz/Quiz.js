import React from 'react'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component{
  state={
    activeQuestion:0,
    answerState:null,
    quiz:[
      {
        question:'Какого цвета небо?',
        rightAnswerId:2,
        id:1,
        answers:[
          {text:'Черный',id:1},
          {text:'Синий',id:2},
          {text:'Красный',id:3},
          {text:'Зеленый',id:4}
        ]
      },
      {
        question:'В каком году основали Минск?',
        rightAnswerId:3,
        id:2,
        answers:[
          {text:'1800',id:1},
          {text:'1101',id:2},
          {text:'1067',id:3},
          {text:'1245',id:4}
        ]
      }
    ]
  }

  onAnswerClickHandler=(answerId)=>{
    console.log('Answer id:',answerId);
    const question=this.state.quiz[this.state.activeQuestion]
    
    if(question.rightAnswerId===answerId){

      this.setState({
        answerState:{[answerId]:'success'}
      })

      const timeout=window.setTimeout(()=>{
        window.clearTimeout(timeout)
        if(this.isQuizFinished()){

        }else{
          this.setState({
            activeQuestion:this.state.activeQuestion+1,
            answerState:null
          })
        }

      },1000)

      
    }else{
      this.setState({
        answerState:{[answerId]:'error'}
      })
    }

    
  }

  isQuizFinished(){
    return this.state.activeQuestion+1===this.state.quiz.length
  }
  render(){
    return(
      <div className={s.Quiz}>
        <div className={s.QuizWrapper}>
        <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz 
          question={this.state.quiz[this.state.activeQuestion].question}
          answers={this.state.quiz[this.state.activeQuestion].answers}
          onAnswerClickHandler={this.onAnswerClickHandler}
          quizLength={this.state.quiz.length}
          answerNumber={this.state.activeQuestion+1}
          state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz