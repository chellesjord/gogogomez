import React from 'react';
import Logo from "../../assets/cover/logo_gogogomez-removebg-preview.png";
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <header className="flex-row px-1">
            <h2>
                <img src={Logo} class="logo-image" />
                <Link className='Title' to="/"> Go Go Gomez
                </Link>
            </h2>
            <nav className='nav-links'>
        <ul className="flex-row">
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2">
            <Link to="/signUp">SignUp</Link>
          </li>
          <li className="mx-2">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="mx-2">
            <Link to="/Augie">Augie</Link>
          </li>           
        </ul>
      </nav>
    </header>
  );
}

export default Nav;