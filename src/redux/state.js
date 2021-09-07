//DEL 210907

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./nav-bar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.profilePage = dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage = navBarReducer(this._state.navBar,action)

        this._callSubscriber(this._state)
    }
}

window.store = store;
export default store;
