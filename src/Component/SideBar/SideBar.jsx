import React from 'react'
import { NavLink } from 'react-router-dom';
import stl from './SideBar.module.css';


export const SideBar = () => {
    return (
        <div className={stl.sideBarWrapper}>
            <nav>
                <div><NavLink className={stl.itemSidebar} activeClassName={stl.active} to="/Content">Профиль</NavLink></div>
                <div><NavLink className={stl.itemSidebar} activeClassName={stl.active} to="/Dialogs">Сообщения</NavLink></div>
                <div><NavLink className={stl.itemSidebar} to="#s">Новости</NavLink></div>
                <div><NavLink className={stl.itemSidebar} to="#s">Музыка</NavLink></div>
                <div><NavLink className={stl.itemSidebar} to="#s">Настройки</NavLink></div>
            </nav>
        </div>
    )
}
