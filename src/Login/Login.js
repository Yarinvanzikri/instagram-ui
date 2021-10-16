import React, {useContext} from 'react';
import {loginSchema} from "./login.schema";
import {Formik,Field,ErrorMessage,Form} from 'formik';
import {UserContext} from '../App';
import './Login.scss'

import {login} from "../services/login.service";

function Login(values) {
    const {loggedIn, setLoggedIn} = useContext(UserContext);
    console.log(loggedIn)
    async function submit(values) {
        try{
            const {token} = await login(values);
            setLoggedIn(true);
            localStorage.setItem('loggedIn', token);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h1 className={"title"}>Sign in now</h1>
            <Formik
                validationSchema={loginSchema}
                initialValues={{username:'', password:'' }}
                onSubmit={submit}>
                <Form>
                    <div>
                        <label htmlFor={"username"}>Username:</label>
                    </div>
                        <Field name={"username"} id={"username"}/>
                        <div>
                            <ErrorMessage name="username" component="div"/>
                        </div>
                    <div>
                        <label htmlFor={"password"}>Password:</label>
                    </div>
                        <Field type={'password'} name={"password"} id={"password"}/>
                        <ErrorMessage name="password" component="div"/>

                    <div>
                        <button type={"submit"}>Sign in </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;