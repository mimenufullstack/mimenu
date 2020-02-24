import React from 'react'
import '../components/styles/menu_footer.css'
import casa from '../images/home.png'
import carrito from '../images/Carrito.png'
import buscar from '../images/Group 9.png'
import vector from '../images/Vector.png'
import notificacion from '../images/Group 10.png'
import corazon from '../images/Heart.png'

export default function Menu_footer() {
    return (
        <div>
            <div className="Home-container3">                  
                <img 
                    className="Home-cs"
                    src={casa} 
                />
                <img 
                    className="Home-crzn2"
                    src={corazon} 
                />
                <img
                    className="Home-ntfccn"
                    src={notificacion}
                />
                <img 
                    className="Home-crrt"
                    src={carrito} 
                />
                <img 
                    className="Home-search"
                    src={buscar} 
                />     
                <img
                    className="Home-vctr"
                    src={vector}
                />            
            </div>
        </div>
    )
}
