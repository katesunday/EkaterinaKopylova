import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataPropsType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostDataPropsType>
}
const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts} />
        </div>
    );
};

export default Profile;