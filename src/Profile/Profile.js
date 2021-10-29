import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Post from '../common/Post/Post';
import { getPosts } from '../services/post.service';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import './Profile.scss'

export default function Profile() {
    const [posts, setPosts] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        async function initUser() {
            const posts = await getPosts(username);
            setPosts(posts);
        }
        initUser();
    }, [username]);

    return (
        <div className="profile">
            <ProfileHeader username={username} postNum={posts.length} />
            <h2>posts</h2>
            <div className="profile__posts">
                    <Post posts={posts} />
                {/*key={post._id} data={post}*/}
                ))
            </div>
        </div>
    )
}