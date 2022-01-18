import Logo from "../components/Logo/logo";
import BigImg from "../components/BigImg/bigimg";
import Login from "../components/Login/login";

import ErrorToast from "../components/ErrorToast/errortoast";

function LoginPage() {
    return (
        <fragment>
            <Logo />
            <ErrorToast />
            <BigImg />
            <Login />
        </fragment>
    )
}

export default LoginPage;
