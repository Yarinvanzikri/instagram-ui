import React, {useContext} from 'react';
import './SignOut.scss';
import {UserContext} from "../App";

function SignOut({ username }) {

    const {user} = useContext(UserContext);


    function removeToken (){
        localStorage.removeItem('token')
        window.location.reload();
    }


    return (
        <div className={"btn-wrapper"}>
            {username === user.username ? <button  className={"signOut"} onClick={removeToken}> Sign Out </button> : null}
        </div>



    );
}

export default SignOut;
