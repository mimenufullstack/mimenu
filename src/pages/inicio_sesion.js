import React, { Component } from 'react'
import Navbar from '../components/navbar';
import Registro_formulario from '../components/registro_formulario';

export default class Inicio_sesion extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Registro_formulario />
            </div>
        )
    }
}
