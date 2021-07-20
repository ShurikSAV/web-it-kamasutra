import React from 'react';
import s from './my-posts.module.css'

const Post = () => {
  return (
        <div className={s.posts}>
          <div className={s.item}>
            Post1
          </div>
          <div className={s.item}>
            Post2
          </div>
        </div>
  );
}

export default Post;
