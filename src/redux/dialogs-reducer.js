const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;

            let messages = {
                id: 10,
                message: body
            }
            state.newMessageBody = ''
            state.messages.push(messages)
            break;
    }

    return state;
}

export const addNewMessageBodyCreater = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: text
    }
};
export const sendMessageCreater = () => {
    return {
        type: SEND_MESSAGE
    }
};


export default dialogsReducer