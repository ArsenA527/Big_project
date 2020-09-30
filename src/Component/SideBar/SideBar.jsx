import React from 'react'
import stl from './SideBar.module.css';


export const SideBar = () => {
    return (
        <div className = {stl.sideBarWrapper}>
            <nav>
                <div className={stl.itemSidebar}><a href="#s">Профиль</a></div>
                <div className={stl.itemSidebar}><a href="#s">Сообщения</a></div>
                <div className={stl.itemSidebar}><a href="#s">Новости</a></div>
                <div className={stl.itemSidebar}><a href="#s">Музыка</a></div>
                <div className={stl.itemSidebar}><a href="#s">Настройки</a></div>
            </nav>
        </div>
    )
}
