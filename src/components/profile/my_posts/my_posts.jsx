import React from 'react';
import s from './my_posts.module.css'
import Post from "./post/post";

const My_posts = (props) => {
    let posts = props.posts

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(
            {type:'ADD-POST'}
        );
    }

    let OnPostChange = () => {
        let text = newPostElement.current.value
        let newVar = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        };
        props.dispatch(
            newVar
        );
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange = { OnPostChange }
                        ref = {newPostElement}
                        value = {props.newPostText}
                    />
                </div>
                <div>
                    <button onClick = {addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts.map(m => <Post message={m.message} likeCount={m.likeCount}/>)}
            </div>
        </div>
    );
}

export default My_posts;

