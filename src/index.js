import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    {...state}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText = {store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

reportWebVitals();

store.subscribe(rerenderEntireTree);