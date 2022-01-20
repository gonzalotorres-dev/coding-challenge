import { React, Fragment } from 'react';
import Logo from "../components/Logo/logo";
import BigImg from "../components/BigImg/bigimg";
import GetPassword from "../components/GetPassword/getpassword";

function GetPasswordPage() {
    return (
        <Fragment>
            <Logo />
            <BigImg />
            <GetPassword />
        </Fragment>
    )
}

export default GetPasswordPage;