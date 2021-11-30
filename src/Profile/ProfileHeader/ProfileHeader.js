import React, { useEffect, useState} from 'react';
import Avatar from "../../common/Avatar/Avatar";
import { getUser } from '../../services/user.service'
import './ProfileHeader.scss'
import Following from "./Following/Following";
import {useParams} from "react-router-dom";
import SignOut from "../../SignOut/SighnOut";
import config from "../../config";
import ProfileEdit from "../ProfileEdit/ProfileEdit";


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
            <div className={'profile__avatar'} >
                <Avatar url={config.apiUrl + '/'} username={user.username} avatar={ user.avatar} size={'lg'}/>

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