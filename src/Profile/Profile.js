import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Post from '../common/Post/Post';
import { getPosts } from '../services/post.service';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import './Profile.scss'
import isMobile from "../common/commonFunction/commonFunctions";

export default function Profile() {
    const isMobileBol = isMobile();
    console.log(isMobileBol)
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
        <div className={"Profile"}>
            <ProfileHeader username={username} postNum={posts.length} />
            <h2 className={'Profile__postHeader'}>{`${username}'s Posts`}</h2>
            <div className={isMobileBol ? "post__mobile" : "post"}>
                    <Post posts={posts} />
                {/*key={post._id} data={post}*/}
            </div>
        </div>

    )
}