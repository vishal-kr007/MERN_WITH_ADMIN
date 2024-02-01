import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink href='#'>Vishal</NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/registration'>Registration</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar