import config from '../config/index'

export async function register(user) {
    console.log(user);
    const res = await fetch(config.apiUrl+'/user', {
               method: 'POST',
               body: JSON.stringify(user),
               headers: {
                   'Content-Type': 'application/json'
               }
           });
           return  res.json()
}

export async function login({ username, password }) {
    const res = await fetch(`${config.apiUrl}/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

export async function me() {
    const token = localStorage.getItem('token');
    if (!token) {
        return {};
    }
    const res = await fetch(`${config.apiUrl}/user/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
    });
    return await res.json();
}

export async function getUser(username) {
    const token = localStorage.getItem('token');
    const res = await fetch(`${config.apiUrl}/user/${username}`,{
        headers: {
            'content-type': "application/json",
            Authorization: token
        },
    });

    return res.json()
}


export async function checkAvailabilityUser(username) {
    const res = await fetch(`${config.apiUrl}/get`)
        .then((res) => res.json())
        .then((users) => {
            console.log('users ' , users)
            const isValid = users.find(user => user.username === username);
            console.log('isValid ',isValid)
            return isValid;
        })
        .catch(false);
    return !res;
}

