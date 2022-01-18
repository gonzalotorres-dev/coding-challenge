import './errortoast.scss';
import WarningIcon from '../../img/warning-icon.png';

function ErrorToast() {
    return (
        <div className='error-toast'>
            <img src={WarningIcon} alt="Warning Icon"/>
            <p>El nombre del usuario o la contraseña son incorrectos</p>
        </div>
    )
}

export default ErrorToast;