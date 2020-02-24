import React from 'react'
import tarjeta from '../images/tarjeta.png'
import efectivo from '../images/Group.png'
import nomina from '../images/nomina.png'
import './styles/seleccionar_pago.css'

export default function Seleccionar_pago() {
    return (
        <div>
            <span className="Seleccionar_pago-sfp">
                Selecciona forma de pago
            </span>
            <div className="Seleccionar_pago-container">
                <input className="Seleccionar_pago-rb1" type="radio" />
                <img
                    className="Seleccionar_pago-imgtdc"
                    src={tarjeta}
                />
                <span className="Seleccionar_pago-tdc">
                    Tarjeta de débito o crédito
                </span>
                <input className="Seleccionar_pago-rb2" type="radio" />
                <img
                    className="Seleccionar_pago-imge"
                    src={efectivo}
                />
                <span className="Seleccionar_pago-e">
                    Efectivo
                </span>
                <input className="Seleccionar_pago-rb3" type="radio" />
                <img
                    className="Seleccionar_pago-imgn"
                    src={nomina}
                />
                <span className="Seleccionar_pago-n">
                    Descuento vía nómina
                </span>
            </div>
            <a className="Seleccionar_pago-boton">
                Finalizar Pedido
            </a>
        </div>
    )
}
