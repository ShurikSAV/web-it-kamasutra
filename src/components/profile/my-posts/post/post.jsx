import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9cnEvZ98kadKb7ZIhW20sXOTNVlEsH1q4Q&usqp=CAU'/>
            <p>{props.message}</p>
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;
