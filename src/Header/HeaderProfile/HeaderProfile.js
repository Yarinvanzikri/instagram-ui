import React, {useContext} from 'react';
import './HeaderProfile.scss'
import Avatar from "../../common/Avatar/Avatar";
import {UserContext} from "../../App";

function HeaderProfile() {
    const {user} = useContext(UserContext)
    return (
        <div>
            <Avatar image={'https://ichef.bbci.co.uk/news/976/cpsprodpb/9397/production/_113838773_donkey.jpg'}/>
           <p>{user.username}</p>
        </div>
    );
}

export default HeaderProfile;