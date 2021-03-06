import React , {useRef} from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataPropsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostDataPropsType>
    addPost:()=> void
    newPostText:string
    updateNewPostChange: (newText:string) => void
}

const MyPosts = (props:MyPostsPropsType) => {

  const postsElements = props.posts.map(message =>{
      return(
          <Post message={message.message} likeAmount={message.likeAmount}/>
      )
  })
    let newPostElement = useRef<HTMLTextAreaElement | null>(null);
    const addNewPost = () => {
        if(newPostElement.current){
            props.addPost()
        }
    }
    const onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostChange(text)
        }
    }

    return (
        <div>
            <div className={styles.newPost}>
                New post
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addNewPost} className={styles.addPostBtn}>Add</button>
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