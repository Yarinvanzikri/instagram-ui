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

export async function getFeed() {
    const res = await fetch(config.apiUrl+'/post');
    return res.json();
}