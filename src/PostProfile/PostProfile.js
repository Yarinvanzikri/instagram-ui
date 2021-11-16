import React, {useEffect, useState} from 'react';
import {getPost} from "../services/post.service";
import {useParams} from "react-router-dom";
import config from '../config/index';
import './PostProfile.scss';

function PostProfile() {

    const [post, setPost] = useState(null);
    const { id } = useParams();
    // console.log('params ', id);

    useEffect(()=> {
        async function getPostPro() {
            const postPro = await getPost(id);
            // console.log(postPro)
            setPost(postPro);
            // console.log(post)
        }
          getPostPro();
    },[id])
    // {console.log(post.author.username)}
    // if there is no post yet than dont show the return
    return (
        <div className="PostProfile">
            {post && <div>
                <h1>{`${post.author?.username} Post Profile`}</h1>
                <img className={'imagePro'} src={config.apiUrl + '/' + post.image} alt={'Image Profile'}/>
                <p>{post.body}</p>
            </div> }
        </div>
    );
}

export default PostProfile;