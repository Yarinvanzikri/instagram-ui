import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare , faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import './Menu.scss'
function Menu(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/post/create'}>
                            <FontAwesomeIcon   icon={faPlusSquare} className={'icon'}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/search/user/'}>
                            <FontAwesomeIcon   icon={faSearch} className={'icon'}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <FontAwesomeIcon   icon={faHome} className={'icon'}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;