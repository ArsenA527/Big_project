import React from 'react'
import stl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    return (
        <div className={stl.MyPostsWrapper}>

            <div className={stl.addPost}>
                <textarea placeholder="Что у Вас нового?"></textarea> <br />
                <input type="file" />
                <button>Добавить пост</button>
            </div>

            <Post />
            <Post />
            <Post />
        </div>
    )
}


export default MyPosts;