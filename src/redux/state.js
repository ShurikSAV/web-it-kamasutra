const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
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
        },
        profilePage: {
            newPostText: "it",
            posts: [
                {id: 1, message: 'Hi', likeCount: 23},
                {id: 2, message: 'How is your ..', likeCount: 1},
                {id: 3, message: 'ok', likeCount: 231},
                {id: 4, message: 'ok', likeCount: 238}
            ],
            userName: "ava + description"
        },
        navBar: {
            frends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'}
            ]
        }
    },
    _callSubscriber() {
        console.log('Stated changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer)
    {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 10,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.newPostText = ''
            this._state.profilePage.posts.push(newPost)
        }
        else if(action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText
        }
        else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newText

        }
        else if(action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;

            let messages = {
                id: 10,
                message: body
            }
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push(messages)
        }
        this._callSubscriber(this._state)
    }
}



export const addPostCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreater = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
};
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

window.store = store;
export default store;
