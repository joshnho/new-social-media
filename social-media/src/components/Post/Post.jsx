import React from 'react';

import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Liked from '../../img/like.png';
import NotLiked from '../../img/notlike.png';

import './Post.css';

const Post = ({ post, id }) => {
  return (
    <div className="Post">
      <img src={post.img} alt="" />
      <div className="postReact">
        <img src={post.likes ? Liked : NotLiked} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {post.likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{post.name}</b>
        </span>
        <span> {post.desc}</span>
      </div>
    </div>
  );
};

export default Post;
