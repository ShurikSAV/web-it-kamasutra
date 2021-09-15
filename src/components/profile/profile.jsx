import React from 'react';
//import s from './profile.module.css'
import ProfileInfo from "./profile_info/profile_info";
import MyPostsContainer from "./my_posts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userName = {props.profilePage.userName}/>
            <MyPostsContainer
                store = {props.store}
                posts = {props.profilePage.posts}
                newPostText = {props.profilePage.newPostText}
                dispatch = {props.dispatch}
            />
        </div>
    );
}

export default Profile;
