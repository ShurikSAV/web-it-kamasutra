import React from 'react';
import {Route} from "react-router-dom";
import './App.css'
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav_bar';
import Dialogs from "./components/dialogs/dialogs";
import Profile from './components/profile/profile';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import News from "./components/news/news";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar {...props.navBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render = {() =>
                        <Dialogs {...props.dialogsPage}/> }
                    />
                    <Route exact path='/profile' render = {() =>
                        <Profile
                            {...props.profilePage}
                            addPost={props.addPost}
                            updateNewPostText = {props.updateNewPostText}/>}
                    />
                    <Route path='/news' render = { () => <News/>}/>
                    <Route path='/music' render = { () => <Music/>}/>
                    <Route path='/settings' render = { () => <Settings/>}/>
                </div>
            </div>
    )
}

export default App
