import React from "react";
import {NavLink, useHistory} from "react-router-dom"

function NavBar() {

    const history = useHistory();

    function handleLogin() {
        history.push('/blogposts')
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>

                <li>
                    <NavLink to="blogposts">Blog Overzicht</NavLink>
                </li>

                <button type="button" onClick={handleLogin}>Login</button>
            </ul>
        </nav>
    )
}

export default NavBar;