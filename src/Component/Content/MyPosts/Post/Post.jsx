import React from 'react'
import stl from './Post.module.css';


const Post = () => {
    return (
        <div>
            <div className={stl.postWrapper}>
                <img src="https://sun9-67.userapi.com/c857320/v857320201/1cafbc/ypqOyI3I_fQ.jpg" alt="photo_post" />
                <br />
                <div className={stl.info}>
                    <small>Лютая горилла</small>
                    <span>Like: 10</span>
                </div>

            </div>
            <hr />
        </div>
    )
}


export default Post;