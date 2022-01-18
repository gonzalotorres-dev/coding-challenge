import './logo.scss';
import logo from '../../img/logo.png';

function Logo() {
    return(
        <div className="logo">
            <img src={logo} alt='Logo' />
            <h1>TEK<span>BNK</span></h1>
        </div>
    )
}

export default Logo;