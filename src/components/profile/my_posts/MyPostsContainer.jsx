import React from 'react';
import s from './my_posts.css'
import Post from "./post/post";
import {addPostCreater, updateNewPostTextCreater} from "../../../redux/profile-reducer";
import My_posts from "./my_posts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let posts = props.posts

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostCreater());
    }

    let onPostChange = (text) => {
        props.dispatch(
            updateNewPostTextCreater(text)
        );
    }

    return (
        <My_posts updateNewPostTextCreater = {onPostChange} addPost={addPost} posts={state.profilePage.posts}/>
    );
}

export default My_posts;

