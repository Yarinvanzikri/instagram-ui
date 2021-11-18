import React, {useContext, useEffect, useState} from 'react';
import './SignOut.scss';
import {useHistory, useParams} from "react-router-dom";
import {me} from "../services/user.service";
import {UserContext} from "../App";

function SignOut({ username }) {

    const {user} = useContext(UserContext);
    console.log('user', user.username)


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
