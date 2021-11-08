import React from 'react';
import moment from 'moment';
import './PostDate.scss'
function PostDate(props) {
    let postDate = moment.utc(props.date , "YYYY-MM-DD HH:mm:ss").fromNow('true');
    return (<div className={'flexBox'}>
                <div>{postDate}</div>
            </div>
    );
}

export default PostDate;