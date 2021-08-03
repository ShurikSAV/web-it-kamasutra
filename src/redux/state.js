import {rerenderEntireTree} from "./render";

let state = {
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

    messagesPage: {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 10,
        message: postMessage,
        likeCount: 0
    }
    state.messagesPage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state;