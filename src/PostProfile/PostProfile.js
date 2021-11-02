import React, {useEffect, useState} from 'react';
import {getPost} from "../services/post.service";
import {useParams} from "react-router-dom";
import config from '../config/index';
import './PostProfile.scss';

function PostProfile() {

    const [post, setPost] = useState({});
    const { id } = useParams();
    console.log('params ', id);

    useEffect(()=> {
        async function getPostPro() {
            const postPro = await getPost(id);
            console.log(postPro)
            setPost(postPro);
            console.log(post)
        }
          getPostPro();
    },[id])

    return (
        <div className="PostProfile">
            <h1>{`Post Profile`}</h1>
            <img className={'imagePro'} src={config.apiUrl + '/' + post.image} alt={'Image Profile'}/>
        </div>
    );
}

export default PostProfile;