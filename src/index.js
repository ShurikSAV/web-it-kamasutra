import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from "./components/profile/profile";

let dataBase = {
    dialogs: {
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
            {id: 7, name: 'SAV'}
        ],
        messageData: [
            {id: 1, name: 'Hi'},
            {id: 2, name: 'How is your ..'},
            {id: 3, name: 'ok'},
            {id: 4, name: 'ok'}
        ]
    },
    profile: {
        profileInfo: {
            userName: "ava + description"
        },
        myPosts: {
            messageData : [
                {id: 1, name: 'Hi', likeCount:23},
                {id: 2, name: 'How is your ..', likeCount:1},
                {id: 3, name: 'ok', likeCount:231},
                {id: 4, name: 'ok', likeCount:238}
            ]
        }
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App
            dialogs = {dataBase.dialogs}
            profile = {dataBase.profile}

        />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
