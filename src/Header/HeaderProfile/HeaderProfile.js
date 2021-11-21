import React, {useContext} from 'react';
import './HeaderProfile.scss'
import Avatar from "../../common/Avatar/Avatar";
import {UserContext} from "../../App";
import {Link} from "react-router-dom";
import config from "../../config";

function HeaderProfile() {

    const { user } = useContext(UserContext)
    return (
        <div className="header-profile">
            <Link to={`/profile/${user.username}`} className={'profile'}>
                <Avatar size={'md'} avatar={config.apiUrl + '/' + user.avatar} />
                <div>{user.username}</div>
            </Link>
            <div className={'button'}>
                {/*<SignOut username={username}/>*/}
            </div>

        </div>
    );
}

export default HeaderProfile;