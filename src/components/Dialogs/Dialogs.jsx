import React from "react";
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialog_item/dialog_item";
import Message from "./message/message";

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