import React from 'react';

import { PostsData } from '../../data/PostsData';
import Post from '../Post/Post';

import './Posts.css';

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post post={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
