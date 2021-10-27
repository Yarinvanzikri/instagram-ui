import React from 'react'; //rsf
import './Avatar.scss' ;

function Avatar(prop) {
    return (
            <img className={'Avatar'} src={prop.image} alt="User Profile"/>

    );
}

export default Avatar;