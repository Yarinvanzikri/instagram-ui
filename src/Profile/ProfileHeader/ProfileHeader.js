import React, {useContext, useEffect, useState} from 'react';
import Avatar from "../../common/Avatar/Avatar";
import {follow, getUser, unfollow , me as getMyself} from '../../services/user.service'
import './ProfileHeader.scss'
import Following from "./Following/Following";


function ProfileHeader({username, postNum}) {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function initUser() {
            const user = await getUser(username);
            setUser(user);
        }
        initUser();
    },[username]);

    return (
        <div className={'Profile__header'}>
            <div className={'profile__avatar'}>
                <Avatar image={user.image} size={'lg'}/>
            </div>
            <div className={"Profile__content"}>
                <h2>{user.username}</h2>
                <p>{postNum} posts</p>
                <Following user={user} username={username}/>
            </div>
        </div>
    );
}

export default ProfileHeader;