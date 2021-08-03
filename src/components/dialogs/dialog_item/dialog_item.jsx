import React from "react";
import s from './dialog_item.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let patch = '/dialogs/' + props.id

    return (
        <div className={s.dialogsItems}>
            <NavLink to={patch} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem