import React from 'react'
import { NavLink } from 'react-router-dom';
import stl from './Header.module.css'


const Header = () => {
    return (
        <div className={stl.HeaderWrapper}>
            <NavLink to="/Content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTq9J0oQcy4bKdXcSYpiEp94IH0YkcYiFmYg&usqp=CAU" alt="logo" />
            </NavLink>


            <div className={stl.searchBox}>
                <input type="text" placeholder="Что ищем?" />
                <button>Искать</button>
            </div>
        </div>
    )
}


export default Header;