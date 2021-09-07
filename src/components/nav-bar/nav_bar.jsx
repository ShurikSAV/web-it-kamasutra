import React from 'react';
import s from './nav_bar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    let frends = props.frends

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
            <div className={s.frends}>
                {frends.map( f => <NavLink key={f.id} className={s.frend}  activeClassName={s.activeFrend} to={`/dialogs/${f.id}`}>{f.name}</NavLink> )}
            </div>

        </nav>
    );
}

export default NavBar;
