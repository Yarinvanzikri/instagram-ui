import config from '../config/index'
async function login(user) {
    const res = await fetch(config.apiUrl+'/sign-in', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return  res.json()
}


export {login};