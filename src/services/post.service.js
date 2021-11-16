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