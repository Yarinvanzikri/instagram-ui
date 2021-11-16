import React from 'react';
import Avatar from "../../common/Avatar/Avatar";
import {Link} from "react-router-dom";
import './SearchResult.scss'

function SearchResult(props) {
    return (
        <div className={"SearchResult"} style={{background :"#fafafa"}}>
            {props.users.map((user) => {
                // console.log(user)
                return (<div className={"SearchResult__result"}>
                            <Link to={'/profile/' + user.username}>
                                <div className={"link"}>
                                        <h4 key={user._id}>{user.username}</h4>
                                        <Avatar size={'sm'}/>
                                </div>
                            </Link>
                        </div>

            )
            })}
        </div>
    );
}

export default SearchResult;