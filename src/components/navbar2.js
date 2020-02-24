import React from 'react'
import arrow from '../images/Arrow.png'
import menu from '../images/mmenublanco.png'
import './styles/navbar2.css'

export default function Navbar2() {
    return (
        <div>
            <div className="Navbar2">
                <img
                    className="Navbar2_arrow"
                    src={arrow}
                    alt="logo de flecha" 
                />

                <img
                    className="Navbar2_mimenu"
                    src={menu}
                    alt="logo mimenu" 
                    width="128px"
                    height="45px"
                />
            </div>
        </div>
    )
}
