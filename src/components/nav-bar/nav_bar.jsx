import React from 'react';
import s from './nav_bar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
