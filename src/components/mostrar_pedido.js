import React from 'react'
import './styles/mostrar_pedido.css'

export default function Mostrar_pedido() {
    return (
        <div>
            <div>
                <span className="Mostrar_pedido-mp">
                    Mostrar Pedido
                </span>
                <span className="Mostrar_pedido-smn">
                    SEMANA DEL 20 AL 24 DE MAYO
                </span>
                <span className="Mostrar_pedido-cnsms">
                    Consumos
                </span>
                <span className="Mostrar_pedido-ttl">
                    Total
                </span>
                <div className="Mostrar_pedido-ttlnum">
                    5
                </div>
                <div className="Mostrar_pedido-rectangle">
                    <p className="Mostrar_pedido-txt1 ">
                        1 Lunes 20
                    </p>
                    <p className="Mostrar_pedido-txt2">
                        Sopa de verduras
                    </p>
                    <p className="Mostrar_pedido-txt3">
                        Pollo a la barbacoa
                    </p>
                    <p className="Mostrar_pedido-txt4 ">
                        1 Martes 21
                    </p>
                    <p className="Mostrar_pedido-txt5">
                        Sopa de milpa
                    </p>
                    <p className="Mostrar_pedido-txt6">
                        Ensalada de atún
                    </p>
                    <p className="Mostrar_pedido-txt7">
                        1 Míercoles
                    </p>
                    <p className="Mostrar_pedido-txt8">
                        Sopa de pasta
                    </p>
                    <p className="Mostrar_pedido-txt9">
                        Pechuga empanizada con ensalada verde
                    </p>
                    <p className="Mostrar_pedido-txt10">
                        1 Jueves 23
                    </p>
                    <p className="Mostrar_pedido-txt11">
                        Sopa de habas
                    </p>
                    <p className="Mostrar_pedido-txt12">
                        Fajitas de res
                    </p>
                    <p className="Mostrar_pedido-txt13 Mostrar_pedido-ds">
                        1 Viernes 24
                    </p>
                    <p className="Mostrar_pedido-txt14">
                        Sopa de lentejas
                    </p>
                    <p className="Mostrar_pedido-txt15">
                        Carne asada con chilaquiles
                    </p>
                </div>
                <span className="Mostrar_pedido-ps">
                    $
                </span>
                <div className="Mostrar_pedido-subcontainer">
                    100.00
                </div>
                <a className="Mostrar_pedido-boton">
                    Enviar Pedido
                </a>
            </div>
        </div>
    )
}
