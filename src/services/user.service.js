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

export async function checkAvailabilityUser(username) {
    const res = await fetch(`${config.apiUrl}/get`)
        .then((res) => res.json())
        .then((users) => {
            const isValid = users.find(user => user.username === username);
            return isValid;
        })
        .catch(false);
    return !res;
}

