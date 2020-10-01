import React from 'react'
import stl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div className={stl.profileWrapper}>
            
            <ProfileInfo MyData={props.m_mydata} />
            
            <MyPosts />

        </div>
    )
}

export default Profile;
