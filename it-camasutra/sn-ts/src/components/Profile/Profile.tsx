import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataPropsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostDataPropsType>
    addPost:(postMessage:string)=> void
}
const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}
                     addPost = {props.addPost}/>
        </div>
    );
};

export default Profile;