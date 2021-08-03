import React from 'react';
import s from './my_posts.module.css'
import Post from "./post/post";

const My_posts = (props) => {
    let posts = props.posts

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts.map(m => <Post message={m.message} likeCount={m.likeCount}/>)}
            </div>
        </div>
    );
}

export default My_posts;

