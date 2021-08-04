import React from 'react';
import s from './my_posts.module.css'
import Post from "./post/post";
import {addPost} from "../../../redux/state";

const My_posts = (props) => {
    let posts = props.posts

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }

    let OnPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange = { OnPostChange }
                        ref = {newPostElement}
                        value={props.newPostText}
                    >

                    </textarea>
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

