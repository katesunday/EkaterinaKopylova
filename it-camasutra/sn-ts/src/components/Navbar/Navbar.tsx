import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideFriendsBar from "../SideFrendsBar/SideFriendsBar";
import {SideFriendsBarPropsType} from "../../redux/state";

type NamesPropsType = {
    friendsItems: Array<SideFriendsBarPropsType>
}
const Navbar = (props:NamesPropsType) => {
    let isActiveStyle = {
        color:'#f5588d'
    };
    return (

        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to="/profile"
                                                  style={( {isActive} ) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/dialogs"
                                                  style={( {isActive} ) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Messages</NavLink></div>
            <div className={styles.item}><NavLink to="/news"
                                                  style={({isActive}) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>News</NavLink></div>
            <div className={styles.item}><NavLink to="/music"
                                                  style={({isActive}) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Music</NavLink></div>
            <div className={styles.item}><NavLink to="/settings"
                                                  style={({isActive}) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Settings</NavLink></div>
            <SideFriendsBar friendsItems = {props.friendsItems}/>
        </nav>


    );
};

export default Navbar;