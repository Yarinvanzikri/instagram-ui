import React from 'react';
import {Form, Formik, Field, ErrorMessage} from 'formik';
import {registerSchema} from "./register.schema";
import {register} from "../services/user.service";
import './Register.scss';
import {useHistory} from "react-router-dom";


function Register() {
    const history = useHistory(); // redirecting path with react router (hook);

   async function submit(values) {
       try{
           const user = await register(values);
           history.push('/sign-in'); //  push new future to the history.
           console.log(user)
       } catch (e) {
           console.error(e);
       }
    }
    return (
        <div className={"Register"}>
            <h1 className={"Register__title"}>Registration</h1>
            <Formik
                validationSchema={registerSchema}
                initialValues={{username: '', email: '', password: ''}}
                onSubmit={submit}>
                <Form>
                    <div className={"form-group"}>
                        <label htmlFor={"username"}  >Username:</label>
                        <Field  id="username"  name="username" placeholder="Username"/>
                        <div className={"error"}>
                            <ErrorMessage name="username" component="div"/>
                        </div>

                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"email"}>Email:</label>
                        <Field type="email" id="email"  name="email" placeholder="Your email here"/>
                        <div className={"error"}>
                            <ErrorMessage name="email" component="div"/>
                        </div>

                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"password"}>Password:</label>
                        <Field id="password" type="password"  name="password" placeholder={"Password"}/>
                        <div className={"error"}>
                            <ErrorMessage name="password" component="div"/>
                        </div>

                    </div>
                    <div className={"form-group"}>
                        <button className={"btn-Register"} type="submit">Register now!</button>
                    </div>
                </Form>
            </Formik>
        </div>

    );
}

export default Register;