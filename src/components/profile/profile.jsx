import React from 'react';
//import s from './profile.module.css'
import MyPosts from "./my_posts/my_posts";
import ProfileInfo from "./profile_info/profile_info";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userName = {props.userName}/>
            <MyPosts posts = {props.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
