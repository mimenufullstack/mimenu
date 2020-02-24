import React from 'react'
import eliminar from '../images/Frame.png'
import './styles/ver_lista_menu.css'

export default function Ver_lista_menu() {
    return (
        <div>
            <div>
                <span className="Ver_lista_menu-lm">
                    Listado de Menú
                </span>
                <span className="Ver_lista_menu-smn">
                    SEMANA DEL 20 AL 24 DE MAYO
                </span>
                <input className="Ver_lista_menu-rb1" type="radio" />
                <span className="Ver_lista_menu-d1">
                    Lunes 20
                </span>
                <img
                    className="Ver_lista_menu-bsr"
                    src={eliminar} 
                />
                <span className="Ver_lista_menu-sps">
                    Sopas
                </span>
                <input className="Ver_lista_menu-rb2" type="radio" />
                <span className="Ver_lista_menu-sv">
                    Sopa de verduras
                </span>
                <input className="Ver_lista_menu-rb3" type="radio" />
                <span className="Ver_lista_menu-sl">
                    Sopa de lentejas
                </span>
                <input className="Ver_lista_menu-rb4" type="radio" />
                <span className="Ver_lista_menu-sp">
                    Sopa de pasta
                </span>
                <span className="Ver_lista_menu-pf">
                    Plato fuerte
                </span>
                <input className="Ver_lista_menu-rb5" type="radio" />
                <span className="Ver_lista_menu-pb">
                    Pollo a la barbacoa
                </span>
                <input className="Ver_lista_menu-rb6" type="radio" />
                <span className="Ver_lista_menu-caefr">
                    Carne asada con ensalada de frutos rojos
                </span>
                <input className="Ver_lista_menu-rb7" type="radio" />
                <span className="Ver_lista_menu-fp">
                    Flautas de pollo
                </span>
                <input className="Ver_lista_menu-rb8" type="radio" />
                <span className="Ver_lista_menu-d2">
                    Martes 21
                </span>
                <span className="Ver_lista_menu-sps2">
                    Sopas
                </span>
                <input className="Ver_lista_menu-rb9" type="radio" />
                <span className="Ver_lista_menu-sm">
                    Sopa de milpa
                </span>
                <div className="Ver_lista_menu-container">
                    <a className="Ver_lista_menu-bsrvcns">
                        Observaciones
                    </a>
                </div>
                <a className="Ver_lista_menu-cc">
                    Comentario para el cocinero
                </a>
                <a className="Ver_lista_menu-boton">
                    Ver pedido
                </a>
            </div>
        </div>
    )
}
