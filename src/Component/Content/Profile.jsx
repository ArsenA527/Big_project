import React from 'react'
import stl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    return (
        <div className={stl.profileWrapper}>
            <ProfileInfo MyData={props.m_mydata} />

        </div>
    )
}

export default Profile;
