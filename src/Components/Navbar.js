import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar p-2">
           <ul className='d-flex flex-start'>
               <li className='navbar-brand'>    <Link to="/homepage"><img src={logo}
                            alt="logo"
                            className='logotopleft'/></Link></li>
                <li><Link to="/homepage">Home</Link></li>
            
           </ul>

           <ul className='d-flex flex-end'>
                <li className='flex-end'><i className="bi bi-search"></i></li>
                <li> <i className="bi bi-bell-fill"></i></li>
                <li>Profiles</li>
           </ul>
        </nav>
    )
}

export default Navbar
