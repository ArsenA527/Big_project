import React from 'react'
import stl from './Profileinfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={stl.profInfoWrapper}>
            <img src={props.MyData.img} alt="My photo" />

            <div className={stl.info}>
                <h1>{props.MyData.name}</h1>
                <h3>{props.MyData.description}</h3>
            </div>
        </div>
    )
}


export default ProfileInfo;