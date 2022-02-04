import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My posts:
                <div>New post
                    <textarea/>
                    <button>Add</button>
                </div>
            </div>
            <div className={ styles.posts }>
                <Post message="Hi,how are you?" likeAmount={15}/>
                <Post message="It's my first post!" likeAmount={20}/>
            </div>
        </div>
    );
};

export default MyPosts;