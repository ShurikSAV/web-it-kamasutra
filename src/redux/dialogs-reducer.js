const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initnalState = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
            {id: 7, name: 'SAV'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your ..'},
            {id: 3, message: 'ok'},
            {id: 4, message: 'ok'}
        ],
        newMessageBody: ''
    }
}

const dialogsReducer = (state = initnalState, action) => {
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