import React from 'react';
import {Form, Formik, Field, ErrorMessage} from 'formik';
import {postCreateSchema} from './postSchema';
import {createPost} from '../services/post.service'
import './PostCreate.scss'
import {useHistory} from "react-router-dom";


function PostCreate() {
    const history =  useHistory();
    async function submit(values) {
        try {
            console.log(values)
            await createPost(values);
            history.push('/');
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="PostCreate">
            <h1>Post Now</h1>
            <Formik
                validationSchema={postCreateSchema}
                initialValues={{body : '', image: null}}
                onSubmit={submit}>
                    {({ setFieldValue }) => (
                        <Form>
                            <div className={"PostCreate__input"}>
                                <input type={"file"} name={"image"} onChange={e => {
                                    setFieldValue('image', e.currentTarget.files[0]);
                                }}/>
                                <div className={"error"}>
                                   <ErrorMessage name="image" component="div"/>
                                </div>
                            </div>
                            <div className={"PostCreate__input"}>
                                <Field as={"textarea"} type="textarea" id="body"  name="body" placeholder="What is on your mind?"/>
                                <div className={"error"}>
                                    <ErrorMessage name="body" component="div"/>
                                </div>
                            </div>
                            <div>
                             <button  className="PostCreate__btn">Create Post</button>
                            </div>

                        </Form>
                    )}
            </Formik>
        </div>

    );
}

export default PostCreate;