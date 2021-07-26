import React from 'react';
//import s from './my-posts.module.css'
import Post from "./post/post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
        </div>
    );
}

export default MyPosts;

