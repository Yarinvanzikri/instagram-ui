import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from "../Avatar/Avatar";
import config from "../../config/index";
import heartLike from "../../Feed/assets/heart.png";
import "./Post.scss";
import PostDate from "./PostDate/PostDate";
import PostLike from "./PostLike/PostLike";

function Post(prop) {




    const posts = prop.posts;
    return (
        <div  className={"Feed"}>
            {posts.map((post) => {
                return <div className={"post"} style={{border: "1px solid #8e8e8e"}} key={post._id}>
                    <div className={"Feed__author"}>
                        <Avatar size={'sm'}/>

                        <Link to={'/profile/' + post.author.username} className={'userNameLink'}>
                            <span className="Post_user_username">{post.author.username}</span>
                        </Link>
                        <div className={"Post__date"}>
                            <PostDate date={post.createdAt}/>
                        </div>
                    </div>
                    <div >
                        <Link to={'/post/profile/' + post._id}>
                            <img src={config.apiUrl + '/' + post.image} className={'image'} alt={"Thumbnail"}/>
                        </Link>
                    </div>
                    <div className={"Feed__logo"}>
                        <PostLike likes={post.likes} postId={post._id}/>
                        {/*<a href={config.apiUrl+ '/'}>*/}
                        {/*    <img  src={heartLike}  alt={'like button'}/>*/}
                        {/*</a>*/}
                    </div>
                    <div className={"Feed__content"}>{post.body}</div>

                </div>
            })}
        </div>
    );
}

export default Post;