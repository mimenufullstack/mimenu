import React, { Component } from 'react'
import Menu_footer3 from '../components/menu_footer3';
import Navbar2 from '../components/navbar2'
import Pedido_finalizado from '../components/pedido_finalizado'

export default class Finalizar_pedido extends Component {
    render() {
        return (
            <div>
               <Navbar2 />
               <Pedido_finalizado />
               <Menu_footer3 /> 
            </div>
        )
    }
}
