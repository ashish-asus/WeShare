import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import "./profileSide.css"
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide
