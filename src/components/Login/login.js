import {React, useState} from 'react';
import { NavLink } from "react-router-dom";
import './login.scss';
import ErrorToast from '../ErrorToast/errortoast';

function Login() {
    //Declaro los HOOKS
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [passView, setPassView] = useState(false);
    const [errToast, setErrToast] = useState(false);

    //Funcion que muestra/oculta la contraseña
/*    const changePassView = () => {
      setPassView(!passView);
    };*/

    let count= 1;    
    
    //Funcion que verifica la cantidad de caracteres en la contraseña y el usuario.
    const triggerErrToast = () => {
        user.length > 1 && pass.length > 1 && count > 1 ? setErrToast(false) : setErrToast(true);
        count++;
    }

    return (
        <div className="login-form">
            <h2>Inicia sesión</h2>

            { errToast ? <ErrorToast /> :  "" }

            <form>
                <div className="field">
                    <label htmlFor="user"> Usuario <span>*</span></label>
                    <input 
                        id="user" 
                        type="text" 
                        placeholder="Ingresá tu usuario"
                        onChange= { e => setUser(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label htmlFor="password"> Contraseña <span>*</span></label>
                    <input 
                        id="password" 
                        type={passView ? "text" : "password" } 
                        placeholder="Ingresá tu contraseña"
                        onChange= { e => setPass(e.target.value) }
                    />   
                </div>

                <div className="buttons"> 
                    <input className='btn' type="button" value="Ingresar" onClick={ triggerErrToast }/>
                </div>
                
            </form>

            <NavLink to="/GetPassword" className="link">Olvidé mi contraseña</NavLink>

        </div>
    )
}


export default Login;