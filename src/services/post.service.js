import config from '../config/index'

export async function createPost(post) {
    // console.log('post: ',post)
    const token = localStorage.getItem("token")
    const form = new FormData();
    form.append('body', post.body);
    form.append('image', post.image);
    form.append('filter', post.filter.filter)


    const res = await fetch(config.apiUrl+'/post', {
        method: 'POST',
        body: form,
        headers: {
            'Authorization': token
        }
    });
    return  res.json()
}
export async function getPosts(username) {
    const token = localStorage.getItem("token");
    if(!token) return [];
    const res = await fetch(config.apiUrl + '/post/' + username, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
    return res.json();
}

export async function deletePost(postId){
    const token = localStorage.getItem("token")
    if(token){
        await fetch(`${config.apiUrl}/post/${postId}/delete`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'text/plain',
                'Authorization': token
                    }
        })
    }else{
        return console.log('Post Has Not Been Found');
    }
}

export async function deleteComment(id){
    const token = localStorage.getItem("token")
    // console.log("id-delete-comment::", id)
    if(token){
        await fetch(`${config.apiUrl}/post/comment/${id}/delete`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'text/plain',
                'Authorization': token
                 }
        })
    }else{
        return console.log('Comment Has Not Been Found');
    }
}

export async function postLike(postId) {
    const res = await fetch(config.apiUrl + '/post/' + postId +'/like', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    });
    res.json()
}

export function postUnlike(postId) {
    return fetch(config.apiUrl + '/post/' + postId +'/unlike', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    });
}

export async function getFeed() {
    const res = await fetch(config.apiUrl+'/post');
    return res.json();
}
export async function getPost(id) {
    const token = localStorage.getItem("token");
    if(!token) return [];
    const res = await fetch(`${config.apiUrl}/post/profile/${id}`,{
        method: 'GET',
        header: {
            'content-type': "application/json",
            'Authorization': token
        }
    });
    return res.json();
}

export async function getComments(postId) {
    const token = localStorage.getItem("token");
    if(!token) return [];
    const res = await fetch(config.apiUrl + "/post/"+ postId + '/comment', {
        method: "GET",
        headers: {
            'content-type': "application/json",
            'Authorization': token
        }
    });
    return res.json();
}

export async function createComment(postId, content) {
    // console.log(postId)
    const token = localStorage.getItem("token");
    if(!token) return [];
    const res = await fetch( config.apiUrl+ "/post/"+postId+ "/comment",{
        method: "POST",
        body: JSON.stringify({
            content
        }),
        headers: {
            'content-type': "application/json",
            'Authorization': token
        }

    });
    return res.json();

}