import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../state/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input}  validate={[required]} name={"email"} placeholder={"Email"} />
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} placeholder={"Password"} type={"password"} />
            </div>
            <div>
                <Field component={Input} name={"rememberMy"} type={"checkbox"} /> Remember my
            </div>
            {error && <div className={style.formSummaryError}>
            {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMy)
  }
  if (isAuth) {
    return <Navigate replace to="/profile"/>
  }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)