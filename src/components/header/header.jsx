import React from 'react';
import styles from './header.module.css'


const Header = () => {
    console.log('Header',styles)
  return (
      <header className={styles.header}>
        <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MuXyd8KEmHlFuKFbMftU-rcm3zcORkaQCw&usqp=CAU'/>
        <p>Шапка</p>
        <p>Шапка</p>
      </header>
  )
}

export default Header;
