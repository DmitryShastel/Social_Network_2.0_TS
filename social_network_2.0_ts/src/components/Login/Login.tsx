import React from 'react';
import {Field, reduxForm} from "redux-form";

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    );
};

const LoginForm = (props: any) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)