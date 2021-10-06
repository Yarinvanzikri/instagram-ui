import React from 'react';

function Register(props) {
    return (
        <div>
            <form>
                Username: <input placeholder="Username" type="text"/> <br />
                email:<input type="email" placeholder="Email"/> <br />
                password:  <input type="password" placeholder="Password"/> <br />
                Repeat Password<input type="password" placeholder="Repeat password"/> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;