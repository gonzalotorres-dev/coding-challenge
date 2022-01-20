import './errormssg.scss';
import WarningIcon from '../../img/warning-icon.png';

function ErrorMssg() {
    return(
        <div className="alert-text-mssg">
            <img src={ WarningIcon } alt="Warning Icon"/>
            <p>Este campo no debe estar vacío</p>
        </div>
    )
}

export default ErrorMssg;