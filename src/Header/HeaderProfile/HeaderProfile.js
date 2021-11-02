import React, {useContext} from 'react';
import './HeaderProfile.scss'
import Avatar from "../../common/Avatar/Avatar";
import {UserContext} from "../../App";
import {Link} from "react-router-dom";

function HeaderProfile() {
    const {user} = useContext(UserContext)
    return (
        <div>
            <Link to={`/user/${user.username}`} className={'profile'}>
                <Avatar size={'md'} />
                <div>{user.username}</div>
            </Link>
        </div>
    );
}

export default HeaderProfile;