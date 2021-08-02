import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let patch = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.activ}>
            <NavLink to={patch}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your ..</div>
                <div className={s.message}>ok</div>
            </div>
        </div>
    )
}
export default Dialogs