import React from 'react'
import { NavLink } from 'react-router-dom'
import stl from './DialogsItem.module.css'

const DialogsItem = (props) => {
    let path = "/Dialogs" + props.DialogsID;
    return (
        <div className={stl.DialogsItemWrapper}>
            <NavLink className={stl.adress} to={path}>
                <img src={props.DialogsImg} alt="photo" />
                <span>{props.DialogsName}</span>
            </NavLink>
        </div>
    )
}


export default DialogsItem;