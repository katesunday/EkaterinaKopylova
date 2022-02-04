import React from 'react';
import './Header.module.css'
import styles from "./Header.module.css"
const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSlK7biFME4qBoswGraWRIjVqXwGttzLvsw&usqp=CAU" alt="#"/>
        </header>
    );
};

export default Header;