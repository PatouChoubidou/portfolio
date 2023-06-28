import React from 'react';
/* import logo from '../logo.svg'; */
import { Link } from 'react-router-dom';
import OctoLogo from './OctoLogo';

export function Header() {
    return (
        <header>
            <Link to="/">
               {/*  <img src={logo} style={{width: "50px"}}></img> */}
                <OctoLogo></OctoLogo>
                <h1>Patrice Bonarius</h1>
            </Link>
        </header>
    )
}

export default Header;