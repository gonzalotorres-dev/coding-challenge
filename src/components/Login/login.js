import React from 'react';
import { NavLink } from "react-router-dom";
import './login.scss';
import EyeVector from '../../img/eye-vector.png'

function Login() {
    return (
        <div className="login-form">
            <h2>Inicia sesión</h2>

            <form>
                <div className="field">
                    <label htmlFor="user"> Usuario <span>*</span></label>
                    <input id="user" type="text" placeholder="Ingresá tu usuario"/>
                </div>

                <div className="field">
                    <label htmlFor="password"> Contraseña <span>*</span></label>
                        <input id="password" type="password" placeholder="Ingresá tu contraseña"/>   
                </div>

                <div className="buttons">
                    <input className="btn" type="submit" value="Ingresar" />    
                </div>
                
            </form>

            <NavLink to="/GetPassword" ClassName="link">Olvidé mi contraseña</NavLink>

        </div>
    )
}


export default Login;