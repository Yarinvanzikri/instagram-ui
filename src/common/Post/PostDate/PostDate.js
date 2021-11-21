import React from 'react';
import moment from 'moment';
import './PostDate.scss'
function PostDate(props) {
    let postDate = moment.utc(props.date , "YYYY-MM-DD HH:mm:ss").fromNow('true');
    return (<span className={'flexBox'}>
                <span>{postDate}</span>
            </span>
    );
}

export default PostDate;