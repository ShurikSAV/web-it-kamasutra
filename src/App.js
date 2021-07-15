import React from 'react';

import './App.css'

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MuXyd8KEmHlFuKFbMftU-rcm3zcORkaQCw&usqp=CAU'></img>
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Message</div>
      </nav>
      <div className='content'>Main content</div>
    </div>
  )
}

export default App
