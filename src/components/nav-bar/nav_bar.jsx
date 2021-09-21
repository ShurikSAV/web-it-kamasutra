import React from 'react';
import './nav_bar.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    let frends = props.frends

    return (
        <nav className='nav'>
            <div className='item'>
                <NavLink activeClassName='activeLink' to="/profile">Profile</NavLink>
            </div>
            <div className='item'>
                <NavLink activeClassName='activeLink' to="/dialogs">Messages</NavLink>
            </div>
            <div className='item'>
                <NavLink activeClassName='activeLink' to="/news">News</NavLink>
            </div>
            <div className='item'>
                <NavLink activeClassName='activeLink' to="/music">Music</NavLink>
            </div>
            <div className='item'>
                <NavLink activeClassName='activeLink' to="/settings">Settings</NavLink>
            </div>
            <div className='frends'>
                {frends.map( f => <NavLink key={f.id} className='frend'  activeClassName='activeFrend' to={`/dialogs/${f.id}`}>{f.name}</NavLink> )}
            </div>

        </nav>
    );
}

export default NavBar;
