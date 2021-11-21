import React from 'react';
import {deletePost} from "../services/post.service";
import './PostDelete.scss'

function PostDelete({username, author, id}) {

    async function postDeleteHandler() {
        await deletePost(id);
        window.location.reload();


    }


    return (
        <span>
            {/*{console.log("username ",username, "author", author, "id", id)}*/}
            {username === author ? <button type="button" className="del-btn" onClick={postDeleteHandler}
                >Delete</button>: null}
        </span>


    );
}

export default PostDelete;