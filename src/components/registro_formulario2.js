import React from 'react'
import './styles/Registro_formulario2.css'

export default function Registro_formulario2() {
    return (
        <div>
            <div>
                <span className="Registro_formulario2-itd">
                    Ingresa tus datos
                </span>
                <span className="Registro_formulario2-n">
                    Nombre(s)<span id="ast">*</span>
                </span>
                <input className="Registro_formulario2-ni" />
                <span className="Registro_formulario2-a">
                    Apellido(s)<span id="ast">*</span>
                </span>
                <input className="Registro_formulario2-ai" />
                <span className="Registro_formulario2-ce">
                    Correo electrónico<span id="ast">*</span>
                </span>
                <input className="Registro_formulario2-cei" />
                <span className="Registro_formulario2-c">
                    Contraseña<span id="ast">*</span>
                </span>
                <span className="Registro_formulario2-cc">
                    Confirmar contraseña<span id="ast">*</span>
                </span>
                <input className="Registro_formulario2-ci" />
                <input className="Registro_formulario2-cci" />
                <span className="Registro_formulario2-cr">
                    <span id="ast">*</span>Campos requeridos
                </span>
                <a className="Registro_formulario2-boton">
                    Crear cuenta
                </a>
            </div>
        </div>
    )
}
