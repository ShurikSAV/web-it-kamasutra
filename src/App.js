import React from 'react';
import './App.css'
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from './components/profile/profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                {/*<Profile />*/}
                <div className='app-wrapper-content'>
                    <Route component={Dialogs}/>
                    <Route component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
