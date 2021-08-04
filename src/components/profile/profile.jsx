import React from 'react';
//import s from './profile.module.css'
import MyPosts from "./my_posts/my_posts";
import ProfileInfo from "./profile_info/profile_info";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo userName = {props.userName}/>
            <MyPosts
                posts = {props.posts}
                addPost={props.addPost}
                newPostText = {props.newPostText}
                updateNewPostText = {props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;
