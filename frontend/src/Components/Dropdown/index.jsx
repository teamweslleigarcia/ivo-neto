import React, { useState } from 'react'
import './dropdown.css'
import { MenuItems } from './menuItems';
import { NavLink } from 'react-router-dom';

const Dropdown = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu-w clicked' : 'dropdown-menu-w'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
              {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
  )
}

export default Dropdown