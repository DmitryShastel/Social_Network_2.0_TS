import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form";

type LoginFormProps = {
    onSubmit: (formData: FormValues) => void;
}

type FormValues = {
    login: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC<InjectedFormProps<FormValues, LoginFormProps> & LoginFormProps> = (props) => {
    const {handleSubmit} = props;

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

const LoginReduxForm = reduxForm<FormValues, LoginFormProps>({
    form: 'login'
})(LoginForm);

export const Login: React.FC = () => {
    const onSubmit = (formData: FormValues) => {
        console.log(formData);
    }

    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    );
};