import React, {useEffect, useRef, useState} from 'react';
import {Form, Formik, Field, ErrorMessage} from 'formik';
import {postCreateSchema} from './postSchema';
import {createPost} from '../services/post.service'
import './PostCreate.scss'
import {useHistory} from "react-router-dom";


function PostCreate() {
    const [image, setImage] = useState('')
    const [preview, setPreviews] = useState('')
    const history =  useHistory();

    useEffect(() =>{
        if (image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(reader.result);
            }
            reader.readAsDataURL(image);
        } else {
            setPreviews(null)
         }
        },[image])
    async function submit(values) {
        try {
            console.log(values)
            await createPost(values);
            history.push('/');
        } catch (err) {
            console.log(err)
        }
    }
    const fileInputRef = useRef();

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
                                {preview ? (<img
                                    className={'preview'}
                                    src={preview}/>) : (
                                    <button className={'uploadButton'} onClick={(event) => {
                                        event.preventDefault();
                                        fileInputRef.current.click()
                                    }}>
                                        Upload Image
                                    </button>
                                )}

                                <input
                                    type={"file"}
                                    style={{ display: "none"}}
                                    ref={fileInputRef}
                                    name={"image"}
                                    accept={"images/*"}
                                    onChange={e => {
                                    const file = e.target.files[0];
                                    if(file) {
                                        setImage(file)
                                    } else {
                                        setImage(null)
                                    }
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