import React from "react";
import s from './dialogs.module.css'
import DialogItem from "./dialog_item/dialog_item";
import Message from "./message/message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.name}/>)}
            </div>
        </div>
    )
}
export default Dialogs