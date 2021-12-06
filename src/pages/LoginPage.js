import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage({ value, toggle }) {

    const history = useHistory();

    function handleLogin() {
        toggle(!value);
        history.push('/blogposts')
    }

    return(
        <div className="login-page">
            <h1>Login pagina</h1>
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;