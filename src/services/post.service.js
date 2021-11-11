import config from '../config/index'

export async function createPost(post) {
    const token = localStorage.getItem("token")
    console.log(post);

    const form = new FormData();
    form.append('body', post.body);
    form.append('image', post.image);


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

export function postLike(postId) {
    return fetch(config.apiUrl + '/post/' + postId +'/like', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    });
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