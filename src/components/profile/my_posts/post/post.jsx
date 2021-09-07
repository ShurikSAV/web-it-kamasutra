import React from 'react';
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt={props.message} src={props.foto}/>
            <p>{props.message}</p>
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    );
}

export default Post;
