import React, { Component } from 'react'
import Navbar2 from '../components/navbar2';
import Menu_footer2 from '../components/menu_footer2';
import Seleccionar_pago from '../components/seleccionar_pago';

export default class Pago extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
                <Seleccionar_pago />
                <Menu_footer2 />
            </div>
        )
    }
}
