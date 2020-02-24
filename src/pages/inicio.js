import React from 'react'
import './styles/inicio.css'
import menu from '../images/mmenublanco.png'
import logoHor from '../images/logo_horizontal_azul2.png'
import c from '../images/Group 3.png'

export default function Inicio() {
    return (
        <div>
            <div className="Inicio">
                <img 
                    className="Inicio-miMenu"
                    src={menu} 
                    alt="logo mimenu"
                    width="260px"
                    height="92px"
                />

                <img 
                    className="Inicio-logo"
                    src={logoHor}
                    alt="logo rio arronte"
                    width="250px"
                    height="60px"
                />

                <img   
                    className="Inicio-c" 
                    src={c}
                    alt="logo c"
                    width="7.17px"
                    height="7px"
                />

                <span
                    className="Inicio-c-tdr"
                >
                    Todos los derechos reservados
                </span>
            </div>
        </div>
    )
}
