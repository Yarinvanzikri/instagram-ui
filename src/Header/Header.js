import React from 'react'; // rsf
import './Header.scss';
import {Link, useParams} from 'react-router-dom'
import Logo from "./Logo/Logo";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import Menu from "../Menu/Menu";

function Header() {

    const params = useParams();
    console.log("paramamama:",params)
    return (
        <div className="Header__wrapper">
            <div className="Header">
                <Link to={'/'} className={'Header__Logo'}>
                    <Logo />
                </Link>
                <Menu/>
                <HeaderProfile />
            </div>
        </div>

    );
}

export default Header;