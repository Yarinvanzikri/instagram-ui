import React, {useContext} from 'react';
import {useState, useEffect} from 'react'
import {UserContext} from "../../App";
import './FollowersFeed.scss'
import FollowersPosts from "./FollowersPosts/FollowersPosts";
import {getFollowersFeed} from "../../services/post.service";

function FollowersFeed(props) {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const posts = await getFollowersFeed(user.username);
                // console.log('numberOfPosts',posts.length);
                setPosts(posts);
                console.log('feed followers',posts)
            } catch (err) {
                console.error(err);
            }
        }
        getPosts();
    }, [])
    return (
        <div className={"Feed"}>
            <div className="Feed__Wrapper">
                <FollowersPosts posts={posts}/>
            </div>
            <div className= 'footer'>

            </div>

        </div>
    )
}

export default FollowersFeed;