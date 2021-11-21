import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Avatar from "../Avatar/Avatar";
import config from "../../config/index";
import "./Post.scss";
import PostDate from "./PostDate/PostDate";
import PostLike from "./PostLike/PostLike";
import CommentCreate from "./CommentCreate/CommentCreate";
import {UserContext} from "../../App";
import PostDelete from "../../PostDelete/PostDelete";

function Post(prop) {
   const { user } = useContext(UserContext);




    const posts = prop.posts;
    return (
        <div  className={"Feed"}>
            {posts.map((post) => {
                // console.log('postFil: ',post.filter)
                return <div className={"post"} style={{border: "1px solid #8e8e8e"}} key={post._id}>
                    <div className={"Feed__author"}>
                        <Avatar size={'sm'} avatar={config.apiUrl + '/' + post.author.avatar} />

                        <Link to={'/profile/' + post.author.username} className={'userNameLink'}>
                            <span className="Post_user_username">{post.author.username}</span>
                        </Link>
                        <div className={"Post__date"}>
                            <PostDate date={post.createdAt}/>
                        </div>

                    </div>
                    <div style={{filter: post.filter}}>
                        <Link to={'/post/profile/' + post._id}>
                            <img src={config.apiUrl + '/' + post.image} className={'image'} alt={"Thumbnail"}/>
                        </Link>
                    </div>
                    <div className={"Feed__logo"}>
                        <PostLike likes={post.likes} postId={post._id}/>
                        <PostDelete id={post._id} author={post.author.username} username={user.username} />
                    </div>
                    <div className={"Feed__content"}>{post.body}</div>
                    <footer>
                        <div className={"commentsWrap"}>
                            <CommentCreate postId={post._id} postAuthor={post.author.username} username={user.username}/>
                        </div>
                    </footer>
                </div>
            })}
        </div>
    );
}

export default Post;