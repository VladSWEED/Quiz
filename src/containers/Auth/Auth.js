import React from 'react'
import s from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'


export default class Auth extends React.Component{
  state={
    formControls:{
      email:{
        value:'',
        type:'email',
        label:'Email',
        errorMessage:'Введите корректный email',
        valid:false,
        touched:false,
        validation:{
          required:true,
          email:true
        }
      },
      password:{
        value:'',
        type:'password',
        label:'Пароль',
        errorMessage:'Введите корректный пароль',
        valid:false,
        touched:false,
        validation:{
          required:true,
          minLength:6
        }
      }
    }
  }

  loginHandler=()=>{

  }

  registerHandler=()=>{

  }

  submitHandler=(event)=>{
    event.preventDefault()
  }

  onChangeHandler=(event, controlName)=>{
    console.log(`${controlName}:`, event.target.value);
  }

  renderInputs(){
    const inputs=Object.keys(this.state.formControls).map((controlName,index)=>{
      const control=this.state.formControls[controlName]
      return(
        <Input 
          key={controlName + index} 
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={!control.validation}
          onChange={event=>this.onChangeHandler(event,controlName)}/>
      )
    })
    return inputs
  }

  render(){
    return(
      <div className={s.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={s.AuthForm}>
            {this.renderInputs()}
            {/* <Input label="Email"/> */}
            {/* <Input label="Password" errorMessage={'TEST'}/> */}
            <Button type="success" onClick={this.loginHandler}>Войти</Button>
            <Button type="primary" onClick={this.registerHandler}>Зарегистрироваться</Button>
          </form>
        </div>
      </div>
    )
  }
}