import React, {useContext, useEffect, useRef, useState} from 'react';
import './profileEdit.scss'
import {editUserProfile } from "../../services/user.service";
import {UserContext} from "../../App";
import {ErrorMessage, Form, Formik} from "formik";
import {useParams} from "react-router-dom";

function ProfileEdit() {
    const [avatar, setAvatar] =useState({});
    const [userMe, setUserMe] = useState({})
    const fileInputRef = useRef();
    // let  user   = useContext(UserContext);
    // let me = user.user;
    const {user} = useContext(UserContext);
    const {username} = useParams();


    // const [myself, setMyself] =useState(me)

    async function submit (values){
        try{
            // console.log("values", values, userMe);
            setUserMe(user)
          return  await editUserProfile(values, userMe)
        } catch (e) {
            console.error(e);
        }

    }
    return (
        <div className="ProfileEdit">
            <Formik
                initialValues={avatar}
                onSubmit={submit}>
                {({ setFieldValue }) => (
                <Form>
                    {user.username === username ?
                        <div>
                            <input
                                className="ProfileEdit__input"
                                type={"file"}
                                ref={fileInputRef}
                                name={"avatar"}
                                accept={"image/*"}
                                onChange={e => {
                                    const file = e.target.files[0];
                                    if(file) {
                                        setAvatar(e.target.files[0])

                                    } else {
                                        setAvatar(null)
                                    }
                                    setFieldValue('avatar', e.currentTarget.files[0]);
                                }}/>
                                    <div >
                                        <ErrorMessage name="avatar" component="div"/>
                                    </div>
                                    <div >
                                        <button type="submit"  className="ProfileEdit__Button"  onClick={()=>{

                                            }
                                        }>Upload Avatar</button>
                                    </div>
                                </div>

                         : null }
                </Form>
                    )}
            </Formik>
        </div>
    );
}

export default ProfileEdit;