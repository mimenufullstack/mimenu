import React, { Component } from 'react'
import Navbar2 from '../components/navbar2'
import Menu_footer2 from '../components/menu_footer2';
import Mostrar_pedido from '../components/mostrar_pedido'

export default class Ver_pedido extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
                <Mostrar_pedido />
                <Menu_footer2 />
            </div>
        )
    }
}
