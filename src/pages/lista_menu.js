import React, { Component } from 'react'
import Navbar2 from '../components/navbar2'
import Ver_lista_menu from '../components/ver_lista_menu'
import Menu_footer2 from '../components/menu_footer2'

export default class Lista_menu extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
                <Ver_lista_menu />
                <Menu_footer2 />
            </div>
        )
    }
}
