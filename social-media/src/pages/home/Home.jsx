import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'

import './Home.css'

export const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="RightSide">RightSide</div>
    </div>
  )
}

export default Home