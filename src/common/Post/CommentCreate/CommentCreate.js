import React, {useEffect, useState} from 'react';
import {createComment, getComments} from "../../../services/post.service";
import CommentList from "./CommentList/CommentList";
import './CommentCreate.scss'

function CommentCreate({postId , style}) {
    const [value, setValue] = useState('');
    const [comments, setComments] = useState([]);
    console.log(value)

    async function create (postId, value) {
       const commentData =  await createComment(postId, value);
       setComments([commentData, ...comments])
    }
    function submit(e) {
        e.preventDefault()
        create(postId, value)
    }
    useEffect(  ()=>{
        async function getPostComments(){
            const postComments = await getComments(postId)
            setComments(postComments)

        }
        getPostComments()

    },[])

    return (
        <form >
            <div className={"commentInput"}>
                <textarea  className={'input'}
                       placeholder={"Add a comment..."}
                       onChange={(e)=> setValue(e.target.value)}
                       value={value} />
                <span>
                <button  onClick={submit}  className={'commentButton'} type={"submit"} >Post</button>
                </span>
            </div>
                <div className={'comments'} style={style}>
                        <CommentList   comments={comments} />
                </div>

        </form>
    );
}

export default CommentCreate;