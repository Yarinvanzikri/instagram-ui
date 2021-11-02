import React from 'react';
import Avatar from "../../common/Avatar/Avatar";
import {Link} from "react-router-dom";

function SearchResult(props) {
    return (
        <div>
            {props.users.map((user) => {
                return (  <div>
                            <Link to={'/profile/' + user.username}>
                                <Avatar size={'sm'}/>
                                <h3 key={user._id}>{user.username}</h3>
                            </Link>
                          </div>
            )
            })}
        </div>
    );
}

export default SearchResult;