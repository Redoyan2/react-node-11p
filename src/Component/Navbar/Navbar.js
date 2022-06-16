import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Food Express</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <Link className='link' to={'/home'}>Home</Link>
            <Link className='link' to={'/login'}>Login</Link>
            <Link className='link' to={'/about'}>About</Link>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;