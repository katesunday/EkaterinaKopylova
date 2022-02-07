import React from 'react';
import styles from './Post.module.css';

export type PostPropsType = {
    message: string
    likeAmount: number
}
const Post = (props:PostPropsType) => {
    return (
        <div className={styles.post}>
            <img className={styles.ava} src='https://static-cse.canva.com/blob/742071/1600w-2so4RyuRmfc.jpg' alt='#'/>
            <div className={styles.item}>{props.message}</div>
            <div>
                <span>likes: {props.likeAmount}</span>
            </div>
        </div>
    );
};

export default Post;