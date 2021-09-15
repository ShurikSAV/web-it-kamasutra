import React from 'react';
import s from './my_posts.module.css'
import Post from "./post/post";
import {addPostCreater, updateNewPostTextCreater} from "../../../redux/profile-reducer";

const My_posts = (props) => {
    let posts = props.posts

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
       props.updateNewPostTextCreater(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange = { onPostChange }
                        ref = {newPostElement}
                        value = {props.newPostText}
                    />
                </div>
                <div>
                    <button onClick = {addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts.map(m => <Post key={m.id} message={m.message} likeCount={m.likeCount}/>)}
            </div>
        </div>
    );
}

export default My_posts;

