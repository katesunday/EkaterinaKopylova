import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={styles.newPost}>
                New post
                <textarea/>
                <button className={styles.addPostBtn}>Add</button>
            </div>
            <div>
                My posts:
            </div>
            <div className={ styles.posts }>
                <Post message="Hi,how are you?" likeAmount={15}/>
                <Post message="It's my first post!" likeAmount={20}/>
            </div>
        </div>
    );
};

export default MyPosts;