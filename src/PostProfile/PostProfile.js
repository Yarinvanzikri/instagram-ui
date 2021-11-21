import React, {useEffect, useState} from 'react';
import {getPost} from "../services/post.service";
import {useParams} from "react-router-dom";
import config from '../config/index';
import './PostProfile.scss';
import PostLike from "../common/Post/PostLike/PostLike";
import CommentCreate from "../common/Post/CommentCreate/CommentCreate";
import PostDate from "../common/Post/PostDate/PostDate";

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
                {post && <div className={"wrapper"}>
                    <div className={"PostProfile__date"}>
                        <h1>{`${post.author?.username}'s Post Profile`}</h1>
                        <PostDate date={post.createdAt}/>
                    </div>
                    <img className={'imagePro'} style={{filter: post.filter}} src={config.apiUrl + '/' + post.image} alt={''}/>
                    <div className={"likey"}>
                        <PostLike likes={post.likes} postId={post._id}/>
                    </div>
                    <p>{post.body}</p>


                </div>}
                {post && <footer>
                    <CommentCreate postId={post._id} style={{height : "36vw" , width: "50vw", background: "#fafafa", borderRadius: "4px"}} />
                </footer>}
        </div>
    );
}

export default PostProfile;