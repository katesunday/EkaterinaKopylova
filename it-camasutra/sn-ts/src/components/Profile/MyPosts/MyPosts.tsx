import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataPropsType} from "../../../index";

type MyPostsPropsType = {
    posts: Array<PostDataPropsType>
}

const MyPosts = (props:MyPostsPropsType) => {

  const postsElements = props.posts.map(message =>{
      return(
          <Post message={message.message} likeAmount={message.likeAmount}/>
      )
  })
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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;