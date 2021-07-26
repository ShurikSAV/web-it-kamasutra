import React from 'react';
import s from './post.module.css'

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9cnEvZ98kadKb7ZIhW20sXOTNVlEsH1q4Q&usqp=CAU'/>
                Post1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
