import React from 'react';
import './post.css'

let s = {
    item: 'item'
}

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
