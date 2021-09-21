import React from "react";
import './dialog_item.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let patch = '/dialogs/' + props.id

    return (
        <div className='dialogsItems'>
            <NavLink to={patch} activeClassName='activeLink'>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem