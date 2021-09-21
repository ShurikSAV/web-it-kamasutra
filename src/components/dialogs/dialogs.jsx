import React from "react";
import './dialogs.css'
import DialogItem from "./dialog_item/dialog_item";
import Message from "./message/message";
import {addNewMessageBodyCreater, sendMessageCreater} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(m => <DialogItem name={m.name} id={m.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreater())
    }
    let onNewMessageChange = (event) => {
        //debugger
        let body = event.target.value
        props.dispatch(addNewMessageBodyCreater(body))
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