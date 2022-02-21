import React from 'react';
import styles from './SideFriendsBar.module.css'
import {SideFriendsBarPropsType} from "../../redux/state";
type NamesPropsType = {
    friendsItems:Array<SideFriendsBarPropsType>
}
const SideFriendsBar = (props:NamesPropsType) => {
    const friendItem = props.friendsItems.map(item =>{
        return (
            <div className={styles.friendItem} >
                <img className={styles.friendAva} src={item.img} alt='#'/>
                <p className={styles.friendName}>{item.name}</p>
            </div>
        )
    })
    return (
        <div className={styles.sideFriendBar}>
            <div className={styles.sideBarTitle}>Often chats</div>
            {friendItem}
        </div>
    );
};

export default SideFriendsBar;