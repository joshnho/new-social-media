import React, { useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';

import './InfoCard.css';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span> Married</span>
      </div>
      <div className="info">
        <span>
          <b>Lives In</b>
        </span>
        <span> NYC</span>
      </div>
      <div className="info">
        <span>
          <b>Graduated from</b>
        </span>
        <span> Flatiron School</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
