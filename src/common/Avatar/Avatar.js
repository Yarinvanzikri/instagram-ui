import React from 'react'; //rsf
import './Avatar.scss' ;

function Avatar(props) {
    return (
        <div className={`Avatar ${props.size || 'Md'}` }>
            <img  src={props.image || 'https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg'} alt="User Profile"/>
        </div>

    );
}

export default Avatar;