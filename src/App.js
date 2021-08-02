import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/profile/profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
