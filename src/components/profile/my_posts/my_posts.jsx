import React from 'react';
import s from './my_posts.module.css'
import Post from "./post/post";

const My_posts = (props) => {
    let messageData2 = props.posts

    let addPost = () => {
        console.log('addPost')
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {messageData2.map(m => <Post message={m.name} likeCount={m.likeCount}/>)}
            </div>
        </div>
    );
}

export default My_posts;

