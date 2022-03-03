import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataPropsType} from "../../redux/state";

type ProfilePropsType = {
    newPostText:string
    posts: Array<PostDataPropsType>
    addPost:()=> void
    updateNewPostChange: (newText:string) => void
}
const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}
                     newPostText = {props.newPostText}
                     addPost = {props.addPost}
                     updateNewPostChange = {props.updateNewPostChange}/>
        </div>
    );
};

export default Profile;