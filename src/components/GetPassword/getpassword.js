import { React, useState } from 'react';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';
import ErrorMssg from '../ErrorMssg/errormssg';
import './getpassword.scss';



function GetPassword() {
    //Hooks
    const [pass, setPass] = useState('');
    const [alertMssg, setAlertMssg] = useState(false);

    //Funcion que verifica si el campo de dni (documentacion) tiene mas de un caracter
    const getPasswordBack = () => {
        pass.length < 1 ? setAlertMssg(true) : setAlertMssg(false) ;
    }

    // Variable con data para el select
    const opt = [
        { value: 'DNI', label: 'DNI'},
        { value: 'C.I.', label: 'C.I.'},
        { value: 'Pasaporte', label: 'Pasaporte'}
    ];    

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
                    <label htmlFor="docu"> Número de documento <span>*</span></label>
                    <input 
                        id= { alertMssg ? "docu-err" : "docu"}
                        type="text" 
                        placeholder="Ingresá tu numero de documento"
                        onChange={ e => setPass(e.target.value) }
                    />

                    { alertMssg ? <ErrorMssg /> : ""}
                </div>

                <div className="buttons">
                    <NavLink to="/"> Volver </NavLink>  
                    <input type="button" value="Continuar" onClick={ getPasswordBack }/>    
                </div>
                
            </form>

        </div>
    )
}

export default GetPassword;

