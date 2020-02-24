import React from 'react'
import casa from '../images/home.png'
import corazon from '../images/Heart.png'
import carrito from '../images/Carrito.png'
import buscar from '../images/Group 9.png'
import vector from '../images/Vector.png'
import './styles/menu_footer2.css'

export default function Menu_footer2() {
    return (
        <div>
            <div className="Ver_lista_menu-container2">
                <img
                    className="Ver_lista_menu-cs"
                    src={casa}
                />
                <img 
                    className="Ver_lista_menu-crzn"
                    src={corazon}
                />
                <img 
                    className="Ver_lista_menu-crrt"
                    src={carrito}
                />
                <img 
                    className="Ver_lista_menu-search"
                    src={buscar}
                />
                <img
                    className="Ver_lista_menu-vctr"
                    src={vector}
                />
            </div>
        </div>
    )
}
