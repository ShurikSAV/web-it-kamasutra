import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav_bar';
import Dialogs from "./components/dialogs/dialogs";
import Profile from './components/profile/profile';
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render = {() =>
                        <Dialogs
                            dialogsData = {props.dialogs.dialogsData}
                            messageData = {props.dialogs.messageData}
                        /> }/>
                    <Route exact path='/profile' render = { () =>
                        <Profile
                            userName = {props.profile.userName}
                            posts = {props.profile.posts}
                        />}/>
                    <Route path='/news' render = { () => <News/>}/>
                    <Route path='/music' render = { () => <Music/>}/>
                    <Route path='/settings' render = { () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
