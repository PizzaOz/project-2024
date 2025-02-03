import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControl";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}  validate={[required]} name="login" placeholder="Login" />
            </div>
            <div>
                <Field component={Input} validate={[required]} name="password" placeholder="Password" />
            </div>
            <div>
                <Field component="input" name="rememberMy" type={"checkbox"} /> Remember my
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (dataForm) => {
    console.log(dataForm)
  }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}



export default Login