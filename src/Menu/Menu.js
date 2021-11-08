import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'
import Search from "../Search/Search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlusSquare , faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
function Menu(props) {
    return (
        <div className={'Menu'}>
            <nav>
                <ul>
                    <li>
                        <div className={"search"}>
                            <Search/>
                        </div>
                    </li>
                    <li>
                        <Link to={'/search/user/'}>
                            <svg aria-label="Find People" className="_8-yf5 icon" color="#262626" fill="#262626" height="22"
                                 role="img" viewBox="0 0 48 48" width="22">
                                <path clipRule="evenodd"
                                     d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                                     fillRule="evenodd"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/post/create'}>
                            <svg aria-label="New Post" className="_8-yf5 icon" color="#262626" fill="#262626" height="22"
                                 role="img" viewBox="0 0 48 48" width="22">
                                <path
                                     d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"/>
                                <path
                                     d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"/>
                                <path
                                     d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <svg aria-label="Home" className="_8-yf5 icon" color="#262626" fill="#262626" height="22"
                                 role="img" viewBox="0 0 48 48" width="22">
                                <path
                                     d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;