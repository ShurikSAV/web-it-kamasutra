import React from 'react';
import s from './My-posts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let messageData = [
        {id: 1, name: 'Hi', likeCount:23},
        {id: 2, name: 'How is your ..', likeCount:1},
        {id: 3, name: 'ok', likeCount:231},
        {id: 4, name: 'ok', likeCount:238}
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {messageData.map(m => <Post message={m.name} likeCount={m.likeCount}/>)}
            </div>
        </div>
    );
}

export default MyPosts;

