import React  from 'react'; //rsf
import PropTypes from 'prop-types'
import './Avatar.scss' ;

function Avatar(props) {
    return (
        <div className={`Avatar ${props.size || 'md'}` }>
            <img  src={props.avatar || 'https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg'} alt="User Profile"/>
        </div>

    );
}

Avatar.propTypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['sm','md','lg'])
};

export default Avatar;