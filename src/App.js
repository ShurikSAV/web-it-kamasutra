import React from 'react';

import './App.css'
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Profile from './components/profile/profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  )

}

export default App
