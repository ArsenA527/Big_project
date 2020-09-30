import React from 'react'
import stl from './Header.module.css'


const Header = () => {
    return (
        <div className={stl.HeaderWrapper}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTq9J0oQcy4bKdXcSYpiEp94IH0YkcYiFmYg&usqp=CAU" alt="logo" />

            <div className={stl.searchBox}>
                <input type="text" placeholder="Что ищем?" />
                <button>Искать</button>
            </div>
        </div>
    )
}


export default Header;