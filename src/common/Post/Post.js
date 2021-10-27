import React from 'react';
import Avatar from "../Avatar/Avatar";
import config from "../../config";
import heartLike from "../../Feed/assets/heart.png";
import "./Post.scss";

function Post(prop) {
    const posts = prop.posts;
    return (
        <div className={"Feed"}>
            {posts.map((post) => {
                return <div className={"post"} key={post._id}>
                    <div className={"Feed__author"}>
                        <Avatar image={'https://ichef.bbci.co.uk/news/976/cpsprodpb/9397/production/_113838773_donkey.jpg'}/>
                        <span>{post.author.username}</span>
                    </div>
                    <img className={"image"} src={config.apiUrl + '/' + post.image} alt={"Thumbnail"}/>
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