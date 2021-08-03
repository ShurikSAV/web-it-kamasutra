import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import {addPost} from "./state";



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    {...state}
                    addPost={addPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}