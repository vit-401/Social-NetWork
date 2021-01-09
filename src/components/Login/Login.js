import React from 'react'
import s from './login.Module.css'
import {reduxForm,Field} from 'redux-form'
import { required} from "../validate/validate";
import {Input} from "../common/FormsControls/FormsControls";


const LoginForm = (...props) => {
    return (
        <div className={s.form}>
            <div className={s.login}>
                <h1>Введите логин и пароль</h1>
                <form onSubmit={props.handleSubmit}>
                    <p><Field component={Input} name={"Login"} placeholder={"Логин"} validate = {[required]}/></p>
                    <p><Field component={Input} name={"Password"} validate = {[required]} placeholder={"Пароль"}/></p>
                    <p className={s.remember_me}>
                        <label><Field component={"input"}  name={"rememberMe"} type={'checkbox'}/>Запомнить меня</label>
                    </p>
                    <p className={s.submit}>
                        <button type={"submit"}> Login</button>
                    </p>
                </form>
            </div>
        </div>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData)=> {
        console.log(formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

export default Login