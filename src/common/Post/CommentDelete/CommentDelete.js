import React from 'react';
import './CommentDelete.scss'
import {deleteComment} from "../../../services/post.service";


function CommentDelete({author, username, id, postAuthor}) {
    // console.log("author", author, "username", username, "id", id, "postAuthor", postAuthor)

    async function deleteHandler(){
        await deleteComment(id)
        window.location.reload()
    }

    return (
        <div>
            {author === username || postAuthor === username ? <button type="button" className="del-comment-btn"
              onClick={deleteHandler}
            >X</button> : null }
        </div>
    );
}

export default CommentDelete;