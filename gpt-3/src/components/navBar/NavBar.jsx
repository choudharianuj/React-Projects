import React from 'react'
import './navBar.css';
import {RiMenu3Line , RiCloseLIne} from 'react-icons/ri'

const NavBar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src="{logo}" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default NavBar