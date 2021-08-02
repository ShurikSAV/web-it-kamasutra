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

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'SAV'}
    ]
    let messageData = [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How is your ..'},
        {id: 3, name: 'ok'},
        {id: 4, name: 'ok'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>
            <div className={s.messages}>
                {messageData.map(m => <Message message={m.name}/>)}
            </div>
        </div>
    )
}
export default Dialogs