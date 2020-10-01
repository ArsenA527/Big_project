import React from 'react'
import { NavLink } from 'react-router-dom';
import stl from './SideBar.module.css';


export const SideBar = () => {
    return (
        <div className = {stl.sideBarWrapper}>
            <nav>
                <div className={stl.itemSidebar}><NavLink to="/Content">Профиль</NavLink></div>
                <div className={stl.itemSidebar}><NavLink to="/Dialogs">Сообщения</NavLink></div>
                <div className={stl.itemSidebar}><NavLink to="#s">Новости</NavLink></div>
                <div className={stl.itemSidebar}><NavLink to="#s">Музыка</NavLink></div>
                <div className={stl.itemSidebar}><NavLink to="#s">Настройки</NavLink></div>
            </nav>
        </div>
    )
}
