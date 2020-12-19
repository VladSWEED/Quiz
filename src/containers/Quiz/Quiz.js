import React from 'react'
import s from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends React.Component{
  state={
    results:{},  //{[id]:success error}
    isFinished:false,
    activeQuestion:0,
    answerState:null,  //{[id]:'success' 'error'}
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
    if(this.state.answerState){
      const key=Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key]==='success'){
        return 
      }
    }


    const question=this.state.quiz[this.state.activeQuestion]
    const results=this.state.results
    
    if(question.rightAnswerId===answerId){
      if(!results[question.id]){
        results[question.id]='success'
      }
      this.setState({
        answerState:{[answerId]:'success'},
        results:results
      })

      const timeout=window.setTimeout(()=>{
        
        if(this.isQuizFinished()){
          this.setState({isFinished:true})
        }else{
          this.setState({
            activeQuestion:this.state.activeQuestion+1,
            answerState:null
          })
        }
        window.clearTimeout(timeout)
      },1000)

      
    }else{
      results[question.id]='error'
      this.setState({
        answerState:{[answerId]:'error'},
        results:results
      })
    }

    
  }

  isQuizFinished(){
    return this.state.activeQuestion+1===this.state.quiz.length
  }
  onRetry=()=>{
    this.setState({
      activeQuestion:0,
      answerState:0,
      isFinished:false,
      results:{}
    })
  }


  render(){
    return(
      <div className={s.Quiz}>
        <div className={s.QuizWrapper}>
        <h1>Ответьте на все вопросы</h1>

        {
          this.state.isFinished
            ? <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.onRetry}
            />
            : <ActiveQuiz 
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClickHandler={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion+1}
            state={this.state.answerState}
            />
        }
        </div>
      </div>
    )
  }
}

export default Quiz