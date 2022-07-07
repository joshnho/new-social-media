import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/ProfileSide/ProfileSide';

import './Home.css';

export const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <div className="RightSide">RightSide</div>
    </div>
  );
};

export default Home;
