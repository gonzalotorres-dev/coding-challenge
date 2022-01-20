import {React, Fragment} from 'react';
import Logo from "../components/Logo/logo";
import BigImg from "../components/BigImg/bigimg";
import Login from "../components/Login/login";

function LoginPage() {
    return (
        <Fragment>
            <Logo />
            <BigImg />
            <Login />
        </Fragment>
    )
}

export default LoginPage;
