import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from "../Avatar/Avatar";
import config from "../../config/index";
import heartLike from "../../Feed/assets/heart.png";
import "./Post.scss";

function Post(prop) {
    const posts = prop.posts;
    return (
        <div className={"Feed"}>
            {posts.map((post) => {
                return <div className={"post"} key={post._id}>
                    <div className={"Feed__author"}>
                        <Avatar size={'sm'}/>
                        <Link to={'/profile/' + post.author.username} className={'userNameLink'}>
                            <span className="Post_user_username">{post.author.username}</span>
                        </Link>
                    </div>
                    <div >
                        <Link to={'/post/' + post._id}>
                            <img src={config.apiUrl + '/' + post.image} className={'image'} alt={"Thumbnail"}/>
                        </Link>
                    </div>
                    <div className={"Feed__logo"}>
                        <a href={config.apiUrl+ '/'}>
                            <img  src={heartLike}  alt={'like button'}/>
                        </a>
                    </div>
                    <div className={'Feed__likes'}>likes {post.likes.length}  </div>
                    <div className={"Feed__content"}>{post.body}</div>

                </div>
            })}
        </div>
    );
}

export default Post;