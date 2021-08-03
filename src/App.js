import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import Header from './components/header/header';
import Nav_bar from './components/nav-bar/nav_bar';
import Dialogs from "./components/dialogs/dialogs";
import Profile from './components/profile/profile';
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav_bar/>
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
