import React from 'react'
import arrowl from '../images/Arrowleft.png'
import arrowr from '../images/Arrowright.png'
import elipse from '../images/Ellipse.png'
import elipse2 from '../images/Ellipse2.png'
import corazon from '../images/Heart.png'
import compartir from '../images/share.png'
import pollo from '../images/Pollo.png'
import elipse3 from '../images/Ellipse3.png'
import elipse4 from '../images/Ellipse4.png'
import './styles/menu.css'

export default function Menu() {
    return (
        <div>
            <div>
                <div className="Home-al">
                    <img src={arrowl} />    
                </div>
                <span className="Home-may1">
                    20 may
                </span>
                <span className="Home-may2">
                    21 may
                </span>
                <span className="Home-may3">
                    22 may
                </span>
                <span className="Home-may4">
                    23 may
                </span>
                <span className="Home-may5">
                    24 may
                </span>
                <div className="Home-ar">
                    <img src={arrowr} />
                </div>
                <img 
                    className="Home-e1"
                    src={elipse} 
                />
                <img 
                    className="Home-e2"
                    src={elipse2} 
                />
                <img 
                    className="Home-e3"
                    src={elipse2} 
                />
                <img 
                    className="Home-e4"
                    src={elipse2} 
                />
                <img 
                    className="Home-e5"
                    src={elipse2} 
                />
                <span className="Home-pollotxt">
                    Pollo a la barbacoa
                </span>
                <img 
                    className="Home-polloimg"
                    src={pollo} 
                />
                <div className="Home-container">
                    <span className="Home-span">
                        ¿Que desea hacer?
                    </span>
                    <a className="Home-a1">
                        Solicitar
                    </a>
                    <a className="Home-a2">
                        Cancelar
                    </a>
                    <a className="Home-a3">
                        Nada
                    </a>
                </div>
                <div className="Home-container2">
                    <img 
                        className="Home-crzn"
                        src={corazon} 
                    />
                    <img 
                        className="Home-cmprtr"
                        src={compartir} 
                    />
                </div>
                <img 
                    className="Home-e6"
                    src={elipse3} 
                />
                <img 
                    className="Home-e7"
                    src={elipse4} 
                />
                <img 
                    className="Home-e8"
                    src={elipse4} 
                />
            </div>
        </div>
    )
}
