import React from 'react';
//import s from './Profile.module.css'
import MyPosts from "./my_posts/my_posts";
import ProfileInfo from "./profile_info/profile_info";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userName = {props.profileInfo.userName}/>
            <MyPosts messageData = {props.myPosts.messageData}/>
        </div>
    );
}

export default Profile;
