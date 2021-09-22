import React from "react";
import './dialogs.css'
import DialogItem from "./dialog_item/dialog_item";
import Message from "./message/message";
import {addNewMessageBodyCreater, sendMessageCreater} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {

    const dialogsElements = props.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.newMessageBody;

    let sendMessage = () => {
        props.dispatch(sendMessageCreater())
    }
    let UpdateNewMessageBody = (body) => {
        props.dispatch(addNewMessageBodyCreater(body))
    }

    return (
        <Dialogs UpdateNewMessageBody = {UpdateNewMessageBody} sendMessage = {sendMessage} dialogsPage = {props.dialogsPage}/>
    )
}
export default DialogsContainer