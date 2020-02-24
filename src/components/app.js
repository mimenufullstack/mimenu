import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Finalizar_pedido from '../pages/finalizar_pedido';
import Pago from '../pages/pago';
import Ver_pedido from '../pages/ver_pedido'
import Lista_menu from '../pages/lista_menu';
import Home from '../pages/home';
import Registro_sesion from '../pages/registro_sesion';
import Inicio from '../pages/inicio';
import Inicio_sesion from '../pages/inicio_sesion';

export default function App() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/inicio" component={Inicio} />
                <Route exact path="/inicio/sesion" component={Inicio_sesion} />
                <Route exact path="/inicio/registro/sesion" component={Registro_sesion} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/home/lista/menu" component={Lista_menu} />
                <Route exact path="/home/pedido" component={Ver_pedido} />
                <Route exact path="/home/pago" component={Pago} />
                <Route exact path="/home/finalizar" component={Finalizar_pedido} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}
