import React from 'react';
import TrendCard from '../TrendCard/TrendCard';
import Home from '../../img/home.png';
import Notification from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';

import './RightSide.css';

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Notification} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className="button r-button">Share</button>
    </div>
  );
};

export default RightSide;
