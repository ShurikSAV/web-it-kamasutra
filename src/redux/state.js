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
                {id: 1, name: 'Hi'},
                {id: 2, name: 'How is your ..'},
                {id: 3, name: 'ok'},
                {id: 4, name: 'ok'}
            ]
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
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 10,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

window.store = store;
export default store;
