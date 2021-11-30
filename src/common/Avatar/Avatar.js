import React  from 'react'; //rsf
import PropTypes from 'prop-types'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './Avatar.scss' ;
import SignOut from "../../SignOut/SighnOut";
import ProfileEdit from "../../Profile/ProfileEdit/ProfileEdit";
import {Link} from "react-router-dom";

function Avatar(props) {
    console.log('avatarProps:', props)
    console.log('usernameProps:', props.username);
    return (<div >
            {props.size === 'md'?
                <DropdownMenu.Root className={'dropDown'}>
                    <DropdownMenu.Trigger className={'dropDown'}>
                        <div className={`Avatar ${props.size || 'md'}` }>
                            {/*{console.log("avatarLength -:- ", props.avatar.length)}*/}
                            {props.avatar && props.avatar.length > 1 ? <img  src={ props.url+props.avatar } alt="User Profile"/>  : <img  src={ 'https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg' } alt="User Profile"/> }
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className={'dropDown'}>
                        <DropdownMenu.Label className={'dropDown'}>
                            {`${props.username}'s Profile Preferences`}
                        </DropdownMenu.Label>
                        <DropdownMenu.Arrow  />
                        <Link to={`/profile/${props.username}`} className={'profile'}>
                            <DropdownMenu.Item className={'dropDown'}>
                                <button className={'avatarProfileBtn'}>{`${props.username}'s Profile`}</button>
                            </DropdownMenu.Item>
                        </Link>
                        <DropdownMenu.Item className={'dropDown'}>
                            <ProfileEdit username={props.username}/>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className={'dropDown'}>
                            <SignOut username={props.username}/>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
                :
                <div className={`Avatar ${props.size || 'md'}` }>
                    {/*{console.log("avatarLength -:- ", props.avatar.length)}*/}
                    {props.avatar && props.avatar.length > 1 ? <img  src={ props.url+props.avatar } alt="User Profile"/>  : <img  src={ 'https://st3.depositphotos.com/15648834/17930/v/380/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg' } alt="User Profile"/> }
                </div>
            }
            </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['sm','md','lg'])
};

export default Avatar;