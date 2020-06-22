import React from 'react';
import './Navbar.scss';
import logo from '../../logo2.svg';

 export default function Navbar(){
     return(

        <nav className="navbar">
            <img src  ={logo} className="logo" alt="tour "/>
            <ul className="nav-links">
               <li>
                    <a href="/"className="nav-link">home</a>
                    </li>
                    <li>
                    <a href="/"className="nav-link">about</a>
                    </li>
                    <li>
                    <a href="/"className="nav-link active ">tours</a>
                    </li>
            </ul>
        </nav>
     )
 }

    