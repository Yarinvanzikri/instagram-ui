import React, {useEffect, useState} from 'react';

import './CommentList.scss'
import {Link} from "react-router-dom";
function CommentList({ comments }) {




    console.log(comments)
    return (
        <div>
            {comments.map((comment, index) => {
                return <div key={index} style={{ border: "4px solid #fafafa", borderRadius: "4px"}} >
                    <div style={{border: "1px solid #D0D0D05B", padding: "5px", background: "#ffffff"}}>
                        <Link to={'/profile/' + comment.author.username} className={'userNameLink'}>
                            <div><strong>{comment.author.username}</strong></div>
                        </Link>
                        {comment.content}
                    </div>
                </div>
            })}
        </div>
    );
}

export default CommentList;