import React from 'react';
import {NavLink, Link} from 'react-router-dom';


export function Menu() {
   
    const scrollTop = (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const toggleMenu = (e) => {
        const menuItems = document.querySelectorAll('.menu__link');
        const menBtn = document.getElementById('menu__btn');
        
        menBtn.classList.toggle('active');
        if(menBtn.classList.contains('active')){
            menBtn.innerHTML = "x";
        }
        else{
            menBtn.innerHTML = "☰";
        }
        let delay = 0;
        let elements = [...menuItems]; // convert NodeList to Array
        elements = elements.reverse();
        
        elements.forEach((el) => {
            el.classList.toggle('show');
            delay += 0.2; 
            el.style.transitionDelay = delay+"s";
        }); 
    }
     

    return (
       <menu>
            <ul>
                <li className="menu__link">
                    <NavLink to="/"  onClick={toggleMenu}>home</NavLink>
                </li>
                <li className="menu__link">
                    <NavLink to="/projects" onClick={toggleMenu}>projects</NavLink>
                </li>
                <li className="menu__link">
                    <NavLink to="/contact" onClick={toggleMenu} >contact</NavLink>
                </li >
                <li>
                    <Link id="menu__btn" onClick={toggleMenu}>☰</Link>
                </li>
                <li>
                    <Link onClick={scrollTop}>↑</Link>
                </li>
            </ul>
           
       </menu> 
    )
}

export default Menu;