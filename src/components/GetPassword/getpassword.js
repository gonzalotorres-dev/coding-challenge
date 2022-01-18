import React from 'react';
import Select from 'react-select';
import {Link, NavLink} from 'react-router-dom';
import './getpassword.scss';



function GetPassword() {
    
    const opt = [
        { value: 'DNI', label: 'DNI'},
        { value: 'C.I.', label: 'C.I.'},
        { value: 'Pasaporte', label: 'Pasaporte'}
    ]

    return(
        <div className='get-password-form'>
            <h2>Olvidé mi contraseña</h2>

            <form>
                <div className="field">
                    <label> Tipo de documento <span>*</span></label>
                    <Select 
                        defaultValue={opt[0]}
                        className='select-doc' 
                        options={opt}
                        theme = { (theme) => ({
                            ...theme,
                            borderRadius: '7px',
                            colors: {
                                ...theme.colors,
                                text: '#555555',
                                primary25: '#ECCAE5',
                                primary: '#ECCAE5',
                            },
                        })

                        }
                    />
                </div>

                <div className="field">
                    <label htmlFor="password"> Número de documento <span>*</span></label>
                    <input id="password" type="text" placeholder="Ingresá tu numero de documento"/>
                </div>

                <div className="buttons">
                    <NavLink to="/" className="navlink-btn"> Volver </NavLink>  
                    <input type="submit" value="Continuar" />    
                </div>
                
            </form>

        </div>
    )
}

export default GetPassword;

