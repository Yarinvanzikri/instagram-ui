import React from 'react';
import {Link} from "react-router-dom";
import CommentDelete from "../../CommentDelete/CommentDelete";
import PostDate from "../../PostDate/PostDate";
import './CommentList.scss'

function CommentList({ comments, username ,author, postAuthor }) {

    return (
        <div className="commentList">
            {comments.map((comment, index) => {
                return <div key={index} style={{ border: "4px solid #fafafa", borderRadius: "4px"}} >
                    <div style={{border: "1px solid #D0D0D05B", padding: "5px", background: "#ffffff" ,display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Link to={'/profile/' + comment.author.username} className={'userNameLink'}>
                            <div><strong>{comment.author.username}</strong></div>
                            {comment.content}
                        </Link>
                        <span>
                                <CommentDelete id={comment._id} author={comment.author.username} postAuthor={postAuthor} username={username} />
                                <strong><PostDate date={comment.createdAt}/></strong>
                        </span>


                    </div>

                </div>
            })}
        </div>
    );
}

export default CommentList;