import React, {useContext} from 'react';
import {loginSchema} from "./login.schema";
import {Formik,Field,ErrorMessage,Form} from 'formik';
import {UserContext} from '../App';
import './Login.scss'

import {login} from "../services/login.service";
import {me} from '../services/user.service'
import {Link, useHistory} from "react-router-dom";
function Login(values) {
    const history = useHistory();
    const {setUser} = useContext(UserContext);


    async function submit(values) {
        try{
            const {token} = await login(values);
            localStorage.setItem('token', token);
            const loggedUser = await me();
            setUser(loggedUser);
            history.push('/')
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={"Login"}>
            <h1 className={"Login__title"}>Sign in now</h1>
            <Formik
                validationSchema={loginSchema}
                initialValues={{username:'', password:'' }}
                onSubmit={submit}>
                <Form>
                    <div className={"form-group"}>
                        <label htmlFor={"username"}>Username:</label>

                        <Field name={"username"} id={"username"} placeholder={"Username"}/>
                        <div >
                            <ErrorMessage className="error" name="username" component="div"/>
                        </div>
                    </div>
                    <div className={"form-group"} >
                        <label htmlFor={"password"}>Password:</label>
                        <Field type={'password'} name={"password"} id={"password"} placeholder="Password" />
                        <ErrorMessage className="error" name="password" component="div"/>
                    </div>
                    <div>
                        <button className={"Login__btn"} type={"submit"}>Sign in </button>
                    </div>
                    <div className={"form-group"}>
                        <Link to={'/register'}>
                            Dont have account? <strong>Register Now</strong>
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;