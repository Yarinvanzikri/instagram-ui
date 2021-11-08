import React from 'react';
import {useState, useEffect} from 'react'
import {getFeed} from "../services/post.service";
import './Feed.scss'
import Post from "../common/Post/Post";

function Feed(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const posts = await getFeed();
                setPosts(posts);
            } catch (err) {
                console.error(err);
            }
        }
        getPosts()
    }, [])
    return (
        <div>
            <div className="Feed__Wrapper">
                <Post posts={posts}/>
            </div>

        </div>
    )
}

export default Feed;