import React from 'react'
import './styles/registro_formulario.css'

export default function Registro_formulario() {
    return (
        <div>
            <div>
                <span className="Registro_formulario-is">
                    Inicia Sesión
                </span>
                <span className="Registro_formulario-u">
                    Usuario
                </span>
                <input className="Registro_formulario-ui" />
                <span className="Registro_formulario-c">
                    Contraseña
                </span>
                <input className="Registro_formulario-ci" />
                <span className="Registro_formulario-oc">
                    ¿Olvidaste tu contraseña?
                </span>
                <span className="Registro_formulario-rc">
                    Recordar cuenta
                </span>
                <input className="Registro_formulario-chbx" type="checkbox" />
                <a className="Registro_formulario-boton">
                    <span className="Registro_formulario-boton-txt">
                        Ingresar
                    </span>
                </a>
                <span className="Registro_formulario-r">
                    ¿Aún no tienes cuenta? <a className="Registrate">Regístrate</a>
                </span>
            </div>
        </div>
    )
}
