import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../../App";
import {follow, me as getMyself, unfollow} from "../../../services/user.service";
import './Following.scss'


function Following({ user, username }) {
    const { user: me , setUser: setMe } = useContext(UserContext);
    console.log('me: ',me)
    const [isFollowing, setIdFollowing] =useState(me?.following?.includes(user._id));


    const handleFollow = () => {
        // setIdFollowing(true);
        follow(username).then(()=>{
            getMyself()
                .then(loggedUser => {
                    setMe(loggedUser);
                })
        }).catch(() => setIdFollowing(false));
    }
    const handleUnfollow = () => {
        // setIdFollowing(false);
        unfollow(username).then(()=>{
            getMyself()
                .then(loggedUser => {
                    setMe(loggedUser);
                }).catch(() => setIdFollowing(true));
        });
    }

    useEffect(() =>{
        setIdFollowing(me?.following?.includes(user._id))
    },[me, user]);



    return (
        <div className={"Following"}>
            {me.username !== username ? !isFollowing
                ? <button className={"follow"} onClick={handleFollow}>Follow</button>
                : <button className={"unfollow"} onClick={handleUnfollow}>Unfollow</button> : null}
        </div>
    );
}

export default Following;