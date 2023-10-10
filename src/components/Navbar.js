import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo-blanco.png";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const toggleNavbar = () => {
    setVisible(!visible);
  }

  return (
    <nav className="navbar">
        <div className="navbar__container">
            <div className="navbar__col">
                <NavLink to="/" >
                    <img className="navbar__logo" src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="navbar__col">
                <ul className={`navbar__nav ${visible ? 'visible' : ''}`}>
                    <li className="navbar__nav__item"><NavLink to="/" exact activeClassName="active">inicio</NavLink></li>
                    <li className="navbar__nav__item"><NavLink to="/nosotros">nosotros</NavLink></li>
                    <li className="navbar__nav__item"><NavLink to="/contacto">contacto</NavLink></li>
                    <li className="navbar__nav__item"><NavLink to="/sorteos">sorteos</NavLink></li>
                    <li className="navbar__nav__item"><NavLink to="/login">login</NavLink></li>
                </ul>
            </div>
            <div className="navbar__col">
                <button className="navbar__toggle" onClick={toggleNavbar}>
                    <span className="navbar__toggle__icon"></span>
                    <span className="navbar__toggle__icon"></span>
                    <span className="navbar__toggle__icon"></span>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar