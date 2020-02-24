import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Menu from '../components/menu'
import Menu_footer from '../components/menu_footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Menu />
                <Menu_footer />
            </div>
        )
    }
}
