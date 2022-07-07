import React from 'react';

import { TrendData } from '../../data/TrendData';

import './TrendCard.css';

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends For You</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>
              <b>#{trend.name}</b>
            </span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
