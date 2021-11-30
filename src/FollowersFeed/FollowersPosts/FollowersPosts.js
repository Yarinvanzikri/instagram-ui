import React, {useContext} from 'react';
import Avatar from "../../common/Avatar/Avatar";
import config from "../../config";
import {Link} from "react-router-dom";
import PostDate from "../../common/Post/PostDate/PostDate";
import PostLike from "../../common/Post/PostLike/PostLike";
import PostDelete from "../../PostDelete/PostDelete";
import CommentCreate from "../../common/Post/CommentCreate/CommentCreate";
import {UserContext} from "../../App";
import './FollowersPosts.scss'

function FollowersPosts({posts}) {
    const { user } = useContext(UserContext);

    return <div className={"FollowersFeed"}>
        {posts.map((postArr) => {
            // console.log("---",postArr)

            return  postArr.map((post) => {
                return <div className={"FollowersPost"} style={{border: "1px solid #8e8e8e"}} key={post._id}>
                    <div className={"FollowersFeed__author"}>
                        <Avatar size={'sm'} url = {config.apiUrl + '/'} avatar={ post.author.avatar} />
                        <Link to={'/profile/' + post.author.username} className={'userNameLink'}>
                            <span >{post.author.username}</span>
                        </Link>
                        <div className={"FollowersPost__date"}>
                            <PostDate date={post.createdAt}/>
                        </div>
                    </div>
                    <div style={{filter: post.filter}}>
                        <Link to={'/post/profile/' + post._id}>
                            <img src={config.apiUrl + '/' + post.image} className={'FollowersFeed__image'} alt={"Thumbnail"}/>
                        </Link>
                    </div>
                    <div className={"FollowersFeed__logo"}>
                        <PostLike likes={post.likes} postId={post._id}/>
                        <PostDelete id={post._id} author={post.author.username} username={user.username} />
                    </div>
                    <div className={"FollowersFeed__content"}>{post.body}</div>
                    <footer>
                        <div className={"commentsWrap"}>
                            <CommentCreate postId={post._id} postAuthor={post.author.username} username={user.username}/>
                        </div>
                    </footer>
                </div>
            })
        })
        }
    </div>;
}
export default FollowersPosts;
