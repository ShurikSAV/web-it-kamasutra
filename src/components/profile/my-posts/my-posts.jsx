import React from 'react';
import s from './my-posts.module.css'
import Post from "./post/post";

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likeCount='23' />
                <Post message="It's my first post" likeCount='10' />
            </div>
        </div>
    );
}

export default MyPosts;

