import React from "react";
import './dialogs.css'
import DialogItem from "./dialog_item/dialog_item";
import Message from "./message/message";
import {addNewMessageBodyCreater, sendMessageCreater} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.UpdateNewMessageBody(body)
    }

    return (
        <div className='dialogs'>
            <div className='dialogsItems'>
                {dialogsElements}
            </div>
            <div className='messages'>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        value = {newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick} >Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs