import {NavLink} from 'react-router-dom';
import React from 'react';
function Header() {
    const menu = React.createRef();
    const burgerRef = React.createRef();
    let burgerMenu = () => {
      burgerRef.current.classList.toggle('active-burger');
      menu.current.classList.toggle('active-menu')
    }
    return (
      <header className='header'>
        <div className='container header__container'>
          <nav className='nav'>
            <a href='/' className='logo' >ShareNotes</a>
            <ul className='menu__list' ref={menu}>
              <li className='menu__item'><NavLink className='menu__link' to="/">Home</NavLink></li>
              <li className='menu__item'><NavLink className='menu__link' to="/note">Note</NavLink></li>
              <li className='menu__item'><NavLink className='menu__link' to="/about">About</NavLink></li>
              <li className='menu__item'><NavLink className='menu__link' to="/create">Create</NavLink></li>
            </ul>
          </nav>
          <div className='burger' ref={burgerRef} onClick={burgerMenu}>
            <span></span>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  