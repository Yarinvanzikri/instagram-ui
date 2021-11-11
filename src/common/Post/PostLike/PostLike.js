import React, {useState, useContext, useEffect} from 'react';
import './PostLike.scss' ;
import {UserContext} from "../../../App";
import {postLike, postUnlike} from "../../../services/post.service";

function PostLike({ likes, postId }) {
    const { user } = useContext(UserContext);  // because there also useUser Inside the context so we do distruction.
    const [hasLiked, setHasLiked] = useState(likes.includes(user._id));
    const [likesCount, setLikesCount] = useState(likes.length);

    function like() {
        setHasLiked(true);
        setLikesCount(prev => prev + 1);
        postLike(postId).catch(() => setHasLiked(false));
    }
    function unlike() {
        setHasLiked(false);
        setLikesCount(prev => prev - 1);
        postUnlike(postId).catch(() => setHasLiked(true));
    }
    useEffect(()=> {
        setHasLiked(likes.includes(user._id))
    },[user, likes]);

    return (
        <div>
            {
                hasLiked
                ? <button  className={"unlike"} onClick={unlike} >
                        <svg aria-label="Unlike" className="_8-yf5 " color="#ed4956" fill="#ed4956" height="24" role="img"
                             viewBox="0 0 48 48" width="24">
                            <path
                                 d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"/>
                        </svg></button>
                : <button className={'like'} onClick={like} >
                        <svg aria-label="Like" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
                             viewBox="0 0 48 48" width="24">
                            <path
                                d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"/>
                        </svg></button>
            }
            {likesCount} likes
        </div>
    );
}

export default PostLike;