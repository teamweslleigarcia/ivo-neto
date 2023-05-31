import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaUser, FaCaretDown} from 'react-icons/fa'
import { IconContext } from 'react-icons'

import Dropdown from '../Dropdown'

import './navbar-w.css'

const Navbar = () => {
  
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <nav className='navbar-w'>
          <div className='navbar-container-w container-w'>
            <Link to="/" className='navbar-logo-w' onClick={closeMobileMenu}>
              <FaUser className='navbar-icon-w' size={24} />
              Ivo Neto
            </Link>
            <div className='menu-icon-w' onClick={ handleClick }>
              {click ? <FaTimes /> : <FaBars /> }
            </div>
          </div>
        <ul className={ click ? "nav-menu-w active" : "nav-menu-w"}>
          <li className='nav-item-w'>
            <NavLink  to="/" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Início
            </NavLink>
          </li>
          <li className='nav-item-w'>
            <NavLink  to="/about" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Quem Sou Eu
            </NavLink>
          </li>
          <li className='nav-item-w'>
            <NavLink  to="/valores" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Valores
            </NavLink>
          </li>
          <li className='nav-item-w'  
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <NavLink  to="/projetos" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Projetos <FaCaretDown className='icon-dropdown' />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item-w'>
            <NavLink  to="/gabinete" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Gabinete
            </NavLink>
          </li>
          <li className='nav-item-w'>
            <NavLink  to="/trajetoria" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Trajetória
            </NavLink>
          </li>
          <li className='nav-item-w'>
            <NavLink  to="/blog" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Blog
            </NavLink>
          </li>
          <li className='nav-item-w'>
            <NavLink  to="/noticias" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Notícias
            </NavLink>
          </li>
          <li className='nav-item-w'>
            <NavLink  to="/contact" 
            className={({ isActive }) => "nav-links-w" + ( isActive ? " activated" : "")}
            onClick={closeMobileMenu}>
              Contato
            </NavLink>
          </li>

        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Navbar