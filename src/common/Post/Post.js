import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from "../Avatar/Avatar";
import config from "../../config/index";
import heartLike from "../../Feed/assets/heart.png";
import isMobile from "../commonFunction/commonFunctions"
import "./Post.scss";
import PostDate from "./PostDate/PostDate";

function Post(prop) {



    let isMobileBol = isMobile();
    console.log(isMobileBol)
    const posts = prop.posts;
    return (
        <div  className={isMobileBol ? "Feed__mobile" :"Feed"}>
            {posts.map((post) => {
                return <div className={isMobileBol ? "post__mobile" : "post"} key={post._id}>
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