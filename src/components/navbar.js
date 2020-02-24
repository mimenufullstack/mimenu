import React from 'react'
import logham from '../images/Group 8.png'
import menu from '../images/mmenublanco.png'
import user from '../images/Group 7.png'
import './styles/navbar.css'

export default function Navbar() {
    return (
        <div>
            <div className="Navbar">
                <img
                    className="Navbar_menuham"
                    src={logham} 
                    alt="logo menu hamburguesa"
                />

                <img
                    className="Navbar_mimenu"
                    src={menu} 
                    alt="logo mimenu" 
                    width="128px"
                    height="45px"
                />

                <img
                    className="Navbar_user"
                    src={user} 
                    alt="logo usuario" 
                />
            </div>
        </div>
    )
}
